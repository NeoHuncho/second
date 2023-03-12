import { readFile } from "fs/promises";

type KeyWordMatch = {
  longKeyWords: string[];
  shortKeyWords: string[];
};

const parseKeyWordString = (keyWordString: string): KeyWordMatch => {
  const [longKeyWords, shortKeyWords] = keyWordString
    .split(",")
    .map((keyWord) => keyWord.trim())
    .filter((keyWord) => keyWord.length > 0)
    .reduce(
      ([longKWs, shortKWs], keyWord) =>
        keyWord.length > 3
          ? [[...longKWs, keyWord], shortKWs]
          : [longKWs, [...shortKWs, keyWord]],
      [[], []] as [string[], string[]]
    );

  return { longKeyWords, shortKeyWords };
};

const suggestedCat = async (text: string) => {
  const [brands, clothingTypes, shoesTypes, shoeModels] = await Promise.all([
    readFile("./backend/static/keyWords/clothesShoes/brands.txt", "utf8"),
    readFile(
      "./backend/static/keyWords/clothesShoes/clothingTypes.txt",
      "utf8"
    ),
    readFile("./backend/static/keyWords/clothesShoes/shoeTypes.txt", "utf8"),
    readFile("./backend/static/keyWords/clothesShoes/shoeModels.txt", "utf8"),
  ]);

  const brandsArray = parseKeyWordString(brands);
  const clothingTypesArray = parseKeyWordString(clothingTypes);
  const shoeTypesArray = parseKeyWordString(shoesTypes);
  const shoeModelsArray = parseKeyWordString(shoeModels);
  type KeyWordsCat = (typeof keyWordsArray)[number][0];
  const keyWordsArray = [
    ["brands", brandsArray],
    ["clothingTypes", clothingTypesArray],
    ["shoesTypes", shoeTypesArray],
    ["shoeModels", shoeModelsArray],
  ] as const;

  type KeyWordsCount = Record<"long" | "short", number>;

  const result = keyWordsArray.reduce<Record<KeyWordsCat, KeyWordsCount>>(
    (acc, [key, { longKeyWords, shortKeyWords }]) => {
      const count = { long: 0, short: 0 };

      longKeyWords.forEach((kw) => {
        //check if the text contains the keyword without taking into account the case and remove the spaces
        if (
          text
            .replace(/\s/g, "")
            .toLowerCase()
            .includes(kw.replace(/\s/g, "").toLowerCase())
        ) {
          count.long++;
        }
      });

      shortKeyWords.forEach((kw) => {
        if (
          text
            .replace(/\s/g, "")
            .toLowerCase()
            .includes(kw.replace(/\s/g, "").toLowerCase())
        ) {
          count.long++;
        }
      });

      acc[key] = count;
      return acc;
    },
    {} as Record<KeyWordsCat, KeyWordsCount>
  );
  let shortMatchesClothes = 0;
  let shortMatchesShoes = 0;

  if (result.clothingTypes.long > 0)
    return { suggest: false, suggestedCat: "clothes" };
  if (result.shoesTypes.long > 0 || result.shoeModels.long > 0)
    return { suggest: false, suggestedCat: "shoes" };

  if (result.clothingTypes.short > 0) shortMatchesClothes++;
  if (result.shoesTypes.short > 0 || result.shoeModels.short > 0)
    shortMatchesShoes++;
  if (result.brands.short > 0) {
    shortMatchesShoes++;
    shortMatchesClothes++;
  }
  if (shortMatchesClothes > 2 && !shortMatchesShoes)
    return { suggest: true, suggestedCat: "clothes" };
  if (shortMatchesShoes > 2 && !shortMatchesClothes)
    return { suggest: true, suggestedCat: "shoes" };
  if (shortMatchesShoes && shortMatchesShoes) {
    if (shortMatchesShoes > shortMatchesClothes)
      return { suggest: true, suggestedCat: "shoes" };
    if (shortMatchesClothes > shortMatchesShoes)
      return { suggest: true, suggestedCat: "clothes" };
    return { suggest: true, suggestedCat: "shoes+clothes" };
  }
  if (result.brands.long > 0) {
    return { suggest: true, suggestedCat: "shoes+clothes" };
  }

  return { suggest: false, suggestedCat: "" };
};
export default suggestedCat;
