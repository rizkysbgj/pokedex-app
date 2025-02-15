import { Text, View } from "react-native";

const PokemonDetailScreen = (props) => {
  const { route: { params: { id }} } = props;
  return(
    <View>
      <Text>
        {`test ${id}`} 
      </Text>
    </View>
  );
}

export default PokemonDetailScreen;