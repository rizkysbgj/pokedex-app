import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import CardViewComponent from '../../components/CardViewComponent';
import styles from './PokemonListScreen.style';
import Pokemon from '@/src/interfaces/PokemonInterface';
import icons from '@/src/assets/icons';
import { useEffect, useState } from 'react';
import { fetchPokemon } from './PokemonListScreenHandler';

const PokemonListScreen = (props) => {
  const { navigation: { navigate } } = props;
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isHasNextData, setIsHasNextData] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const fetchData = async () => {
    const { pokemons, isHasNext } = await fetchPokemon(offset, limit);
    
    setPokemonList((perviousState) => [...perviousState, ...pokemons]);
    setIsHasNextData(isHasNext);

    if(isHasNext) {
      const nextOffset = offset + limit;
      setOffset(nextOffset);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderPokemonCard = (pokemon: Pokemon) => {
    const { id } = pokemon;
    return(
      <TouchableOpacity
        onPress={() => navigate('PokemonDetail', {id})}
      >
        <View style={styles.cardContainer}>
          <CardViewComponent pokemon={pokemon} />
        </View>
      </TouchableOpacity>
    );
  }

  const renderTitleText = () => {
    return(
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Pokedex
        </Text>
      </View>
    );
  }

  const renderPokemonList = () => {
    return(
      <View style={styles.listContainer}>
        <FlatList 
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={pokemonList}
          numColumns={2}
          renderItem={({item}) => renderPokemonCard(item)}
          onEndReached={() => isHasNextData && fetchData()}
          onEndReachedThreshold={0.2}
        />
      </View>
    );
  }

  const renderBackButton = () => {
    return(
      <Image 
        source={icons.blackBackArrow} 
        style={styles.buttonImage}
      />
    );
  }

  const renderListButton = () => {
    return(
      <Image 
        source={icons.blackListIcon} 
        style={styles.buttonImage}
      />
    );
  }

  const renderButtons = () => {
    return(
      <View style={styles.buttonsContainer}>
        {renderBackButton()}
        {renderListButton()}
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      {renderButtons()}
      {renderTitleText()}
      {renderPokemonList()}
    </View>
  );
}

export default PokemonListScreen;