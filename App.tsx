import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@shopify/restyle";
import { createClient, Provider } from "urql";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import theme from "./theme";

const client = createClient({
  url:
    Platform.OS === "android"
      ? "http://10.0.2.2:3000/graphql"
      : "http://localhost:3000/graphql",
});

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider value={client}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}
