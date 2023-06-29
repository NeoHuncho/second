import { Text, Title } from "@mantine/core";
import { api } from "../utils/api";

export default function favorites() {
  const { data } = api.favorites.getFavorites.useQuery({ page: 1 });
  console.log(1, data);

  return (
    <div>
      <Text>Favoris</Text>
      <Title align="center">👷‍♀️</Title>
    </div>
  );
}
