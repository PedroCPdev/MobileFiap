import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

type NewTweet = {
    name: string;
    avatar: string;
    text: string;
};

async function createTweet(tweet: NewTweet) {
    const response = await fetch(
        "https://6a73bde815e0453fe1b42add.mockapi.io/tweets",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tweet),
        },
    );

    if (!response.ok) {
        throw new Error("Deu ruim!");
    }

    const body = await response.json();

    return body;
}

export default function NovoTweetScreen() {
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: createTweet,

        onSuccess: () => {
            router.dismissTo("/");
        },
    });

    function handleCreateTweet() {
        mutate({
            name: "Professor",
            avatar: "https://avatars.githubusercontent.com/u/54065?v=4&size=64",
            text: "O professor fez errado... kkkkk",
        });
    }

    return (
        <View>
            <Text>Novo Tweet</Text>
            <Pressable disabled={isPending} onPress={handleCreateTweet}>
                <Text>{isPending ? "Salvando..." : "Tweetar"}</Text>
            </Pressable>
            {isError && <Text>Deu erro: {error.message}</Text>}
        </View>
    );
}
