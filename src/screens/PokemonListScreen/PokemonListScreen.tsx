import { FlatList, ListRenderItemInfo, View } from 'react-native';

import CardViewComponent from '../../components/CardViewComponent';
import styles from './PokemonListScreen.style';
import PokemonData from '@/src/fixtures/PokemonData';
import Pokemon from '@/src/interfaces/PokemonInterface';

const { pokemonList } = PokemonData;

const PokemonListScreen = () => {
  const renderPokemonCard = (pokemon: Pokemon) => {
    return(
      <View style={styles.container}>
        <CardViewComponent pokemon={pokemon} />
      </View>
    )
  }
  
  return (
    <View>
      <FlatList 
        data={pokemonList}
        numColumns={2}
        renderItem={({item}) => renderPokemonCard(item)}
      />
    </View>
  );
}

export default PokemonListScreen;