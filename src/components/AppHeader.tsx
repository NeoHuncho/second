import { Title } from "@mantine/core";
import { useRouter } from "next/router";

const AppHeader = () => {
  const router = useRouter();
  return (
    <div className="flex items-center p-2 pl-4">
      <Title
        color="primary"
        order={1}
        className="cursor-pointer text-4xl"
        onClick={() => void router.push("/")}
      >
        Second
      </Title>
    </div>
  );
};
export default AppHeader;
