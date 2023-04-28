import { Switch, Text } from "@mantine/core";
import { Icon } from "../../../assets/icons";
import { useLocalStorage } from "@mantine/hooks";

export default function DarkModeSwitch() {
  const [theme, setTheme] = useLocalStorage({
    key: "color-scheme",
    defaultValue: "light",
  });
  return (
    <div className="flex cursor-pointer items-center justify-between gap-4 ">
      <div className="flex  items-center gap-2">
        <Icon name="MoonFill" />
        <Text>Dark Mode</Text>
      </div>
      <Switch
        onChange={(event) =>
          setTheme(event.currentTarget.checked ? "dark" : "light")
        }
        checked={theme === "dark"}
        size="xs"
        className="-mt-0.5"
      />
    </div>
  );
}
