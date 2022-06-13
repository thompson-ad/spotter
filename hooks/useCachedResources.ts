import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  // Colour scheme
  // #000000
  // #14213d
  // #fca311
  // #e5e5e5
  // #ffffff

  // See Ignote boiler plate for a basic spacing and typography scale
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "overpass-regular": require("../assets/fonts/Overpass-Regular.ttf"),
          "overpass-bold": require("../assets/fonts/Overpass-Bold.ttf"),
          "overpass-extra-bold": require("../assets/fonts/Overpass-ExtraBold.ttf"),
          "rajdhani-bold": require("../assets/fonts/Rajdhani-Bold.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
