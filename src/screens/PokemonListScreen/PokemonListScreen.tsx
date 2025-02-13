import { View } from 'react-native';

import CardViewComponent from '../../components/CardViewComponent';
import styles from './PokemonListScreen.style';

const PokemonListScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <CardViewComponent />
        <View style={styles.cardContainer}>
        </View>
      </View>
    </>
  );
}

export default PokemonListScreen;