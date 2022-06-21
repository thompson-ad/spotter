import * as React from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import { useQuery } from "urql";
import Box from "../atoms/box";
import Icon from "../atoms/Icon";
import Text from "../atoms/text";
import { Screen } from "../components/screen/Screen";
import { MovementHistory } from "../models";
import { palette } from "../theme";

const MovementHistoryQuery = `
  query {
    movementHistory {
      id
      movementName
      progressions {
        weight
      }
    }
  }
`;

export default function TabOneScreen() {
  // Use Kadi Kraman news-flash example to flesh out this component
  const [{ data, error, fetching }, refreshMovementHisotry] = useQuery({
    query: MovementHistoryQuery,
  });

  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredMovements, setFilteredMovements] = React.useState<
    MovementHistory[]
  >([]);
  const handleOnSearchTermChange = (term: string) => {
    setSearchTerm(term);
    const matches = data.filter((d: MovementHistory) =>
      d.movementName.includes(searchTerm)
    );
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

  // Idea for animation experimentation
  // Using Reanimated
  // First pull in the data to the flatlist
  // make the flatlist a Reanimated componenet and see if you can apply a transition to items loading in

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
        data={data?.movementHistory}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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
