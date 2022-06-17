import * as React from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import Box from "../atoms/box";
import Icon from "../atoms/Icon";
import Text from "../atoms/text";
import { Screen } from "../components/screen/Screen";
import { movementHistory } from "../fixtures";
import { MovementHistory } from "../models";
import { palette } from "../theme";

export default function TabOneScreen() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredMovements, setFilteredMovements] = React.useState<
    MovementHistory[]
  >([]);
  const handleOnSearchTermChange = (term: string) => {
    setSearchTerm(term);
    const matches = movementHistory.filter((d) => d.name.includes(searchTerm));
    setFilteredMovements(matches);
  };

  const handleOnFocus = () => {
    // transition to the top of the screen and reveal the history list
    // as the search term closes in on the exact match
    // the card increases in size to reveal more info about the progression history
  };

  // TODO
  // finalise text input design
  // finalise movement information card design (maybe we have more than one)

  const renderItem = ({ item }) => <Text>{JSON.stringify(item)}</Text>;
  return (
    <Screen>
      <Text style={styles.logo} variant="headline">
        Spotter
      </Text>
      <Box>
        <Icon name="search" size={15} color={palette.black} />
        <TextInput
          onChangeText={handleOnSearchTermChange}
          onFocus={handleOnFocus}
          style={styles.movementSearch}
          placeholder="Search for movement history..."
          value={searchTerm}
          placeholderTextColor={palette.paper300}
        />
      </Box>
      {/* styled flatlist to show filtered movements */}
      <FlatList
        data={filteredMovements}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    textAlign: "center",
  },
  movementSearch: {
    backgroundColor: palette.platinum,
    padding: 12,
    borderRadius: 24,
    fontFamily: "overpass-regular",
  },
});
