import * as React from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
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
    const matches = data
      ? data.filter((d: MovementHistory) => d.movementName.includes(searchTerm))
      : [];
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
  // Note - I don't want the card to change size as you are searching but I want them to change once I know the user has stopped search
  // small delay and then they expand either on press or automatically

  // Idea for animation experimentation
  // Using Reanimated
  // First pull in the data to the flatlist
  // make the flatlist a Reanimated componenet and see if you can apply a transition to items loading in

  // How can we type the queries properly from GraphQL? see Frontend Masters or Kadi Kraman
  const renderItem = ({ item }: { item: MovementHistory }) => {
    return (
      <Box style={styles.movementCard}>
        <Text style={styles.movementName}>{item.movementName}</Text>
      </Box>
    );
  };

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
          placeholderTextColor={palette.black}
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
    backgroundColor: palette.orangeWeb,
    padding: 12,
    borderRadius: 24,
    fontFamily: "overpass-regular",
  },
  movementCard: {
    backgroundColor: palette.platinum,
    padding: 12,
  },
  movementName: {},
});
