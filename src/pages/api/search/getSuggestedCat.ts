import type { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import type { CreateChatCompletionResponse } from "openai";
import { Configuration, OpenAIApi } from "openai";
import { env } from "process";
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (typeof request.query.text !== "string") {
    return response.status(400).json({
      query: request.query,
      cookies: request.cookies,
      errorCode: "TEXT_NOT_PROVIDED",
      error: "text has not been provided or is not a string",
    });
  }
  if (env.NODE_ENV !== "production") return response.status(200).json("other");

  if (request.query.text) {
    try {
      const gptRes = await getCatSuggestionWithTimeout(request.query.text);
      const category = gptRes.data.choices[0]?.message?.content;
      console.log(category);
      if (!category) return response.status(200).json(null);
      return response
        .status(200)
        .json(category.replace(/\n|\./g, "").toLowerCase());
    } catch (error) {
      console.log("request timed out");
      return response.status(200).json("other");
    }
  }

  response.status(200).json(null);
}

const getCatSuggestionWithTimeout = async (text: string) => {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  let timeoutId: NodeJS.Timeout;
  const timeoutPromise = new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);
      reject(new Error("Timeout exceeded"));
    }, 1500);
  });

  return Promise.race([
    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `classify into 1 of: clothes, shoes, or other. ${text}}`,
        },
      ],
      temperature: 0,
      max_tokens: 7,
    }),
    timeoutPromise,
  ]).then((res) => {
    clearTimeout(timeoutId);
    return res as AxiosResponse<CreateChatCompletionResponse>;
  });
};
