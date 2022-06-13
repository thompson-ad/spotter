import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import Text from "../atoms/text";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headline">Modal</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
