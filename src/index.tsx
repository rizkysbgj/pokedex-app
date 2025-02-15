import { registerRootComponent } from 'expo';
import { SafeAreaView } from 'react-native';

import PokemonListScreen from './screens/PokemonListScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <PokemonListScreen />
    </SafeAreaView>
  );
}

registerRootComponent(App);