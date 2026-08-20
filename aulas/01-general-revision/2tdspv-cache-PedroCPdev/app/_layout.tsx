import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

// Isto é uma exceção a regra
const queryClient = new QueryClient();

export default function RootLayout() {
  // Aqui, é o meu componente React
  useReactQueryDevTools(queryClient);

  // Sempre retorna um template JSX
  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
}
