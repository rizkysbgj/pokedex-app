import { registerRootComponent } from 'expo';
import { SafeAreaView } from 'react-native';

import PokemonListScreen from './screens/PokemonListScreen';

const App = () => {
  return (
    <SafeAreaView>
      <PokemonListScreen />
    </SafeAreaView>
  );
}

registerRootComponent(App);