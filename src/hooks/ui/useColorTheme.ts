import useLocalStorage from "../../stores/useLocalStorage";

const useColorTheme = () => {
  const { theme } = useLocalStorage();

  const isDark = theme === "dark";
  const isLight = !theme || theme === "light";

  return { isDark, isLight };
};

export default useColorTheme;
