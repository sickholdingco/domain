import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "../styles/index.css";
const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
