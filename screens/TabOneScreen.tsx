import { StyleSheet, View } from "react-native";
import Text from "../atoms/text";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headline">Spotter</Text>
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
