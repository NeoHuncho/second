import type { NextApiRequest, NextApiResponse } from "next";
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

  const configuration = new Configuration({
    apiKey: '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',
    });
  const openai = new OpenAIApi(configuration);
  if(env.NODE_ENV !== "production") return response.status(200).json('other');
  if(request.query.text){  
    const gptRes = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages:[{role:'user', content: `classify into 1 of: clothes, shoes, or other. ${request.query.text}}`}],
      temperature: 0,
      max_tokens: 7,
    });
    const category=gptRes.data.choices[0]?.message?.content
    if(!category) return response.status(200).json(null);
    return response.status(200).json(category.replace(/\n|\./g,'').toLowerCase());
  }

  response.status(200).json(null);
}
