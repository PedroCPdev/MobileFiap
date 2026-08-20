import { useQuery, useMutation } from "@tanstack/react-query";
import { Link } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";

async function deleteTweet(id: string) {
  const response = await fetch(
    "https://6a73bde815e0453fe1b42add.mockapi.io/tweets/" + id,
    {
      method: "DELETE"
    }
  );

  if (!response.ok) {
    throw new Error("Erro!")
  }

  return response.json();
}

export default function Index() {
  const queryKey = ["listaTweets"];

  const queryFn = async () => {
    const response = await fetch(
      "https://6a73bde815e0453fe1b42add.mockapi.io/tweets",
    );

    if (!response.ok) {
      throw new Error("Deu ruim!");
    }

    const body = await response.json();

    return body;
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
    staleTime: 30_000,
    gcTime: 10_000,
  });

  const { mutate } = useMutation({
    mutationFn: deleteTweet,
  })

  function handleDeleteTweet(id: string) {
    mutate(id);
  }

  if (isLoading) {
    // early return ou saída antecipada
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>Tem erro</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>{data.length}</Text>
      <Link replace href={"/about"}>
        IR PARA ABOUT
      </Link>
      <Link href={"/novo-tweet"}>Adicionar Tweet</Link>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Pressable onPress={() => handleDeleteTweet(item.id)}>
              <Text>{item.text}</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}


