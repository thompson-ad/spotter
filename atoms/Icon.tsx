import { Feather } from "@expo/vector-icons";

function Icon(props: {
  name: React.ComponentProps<typeof Feather>["name"];
  color: string;
  size: number;
}) {
  return <Feather {...props} />;
}

export default Icon;
