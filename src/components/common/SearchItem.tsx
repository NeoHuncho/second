import { Text } from "@mantine/core";
import { useState } from "react";
import useColorScheme from "../../hooks/ui/useColorTheme";

type PropTypes = {
  text: string;
  onSubmit: (text: string) => void;
};
const SearchItem = ({ text, onSubmit }: PropTypes) => {
  const [hovered, setHovered] = useState(false);
  const { isLight } = useColorScheme();
  return (
    <div
      style={{
        transition: "background-color 0.2s",
        backgroundColor: !hovered
          ? undefined
          : isLight
          ? "rgb(241, 245, 249)"
          : "rgb(51, 109, 238)",
      }}
      className={`bg-sl bg- flex cursor-pointer flex-col gap-2 rounded-sm  p-1`}
      onClick={() => {
        onSubmit(text);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Text>{text}</Text>
    </div>
  );
};

export default SearchItem;
