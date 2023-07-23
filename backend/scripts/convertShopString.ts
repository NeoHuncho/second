import { readFile, writeFile } from "fs/promises";
const convertString = async () => {
  const stringToConvert = await readFile("./shopString.txt");
  await writeFile("./convertedShop.txt", stringToConvert, {
    encoding: "utf8",
  });
};

convertString()
  .then(() => console.log("done"))
  .catch((error) => console.log(error));
