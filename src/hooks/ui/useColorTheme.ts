import { useLocalStorage } from "@mantine/hooks";

const useColorScheme = () => {
  const [colorTheme, setColorTheme] = useLocalStorage({
    key: "color-scheme",
    defaultValue: "light",
  });

  const isDark = colorTheme === "dark";
  const isLight = colorTheme === "light";

  return { colorTheme, setColorTheme, isDark, isLight };
};

export default useColorScheme;
