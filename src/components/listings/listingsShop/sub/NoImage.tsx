import { Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ImageIcon } from "../../../../assets/icons";

export default function NoImage() {
  const smallBreakpoint = useMediaQuery("(min-width: 640px)");
  return (
    <div
      style={{ height: 230 }}
      className="flex w-full flex-col items-center justify-center"
    >
      <ImageIcon size={30} />
      <Text className="text-center text-sm">Aucune image</Text>
    </div>
  );
}
