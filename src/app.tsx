import { registerRootComponent } from 'expo';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PokemonListScreen from './screens/PokemonListScreen';
import PokemonDetailScreen from './screens/PokemonDetailScreen';

const Stack = createNativeStackNavigator();

const option = {
  headerShown: false
}

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={option}
        >
          <Stack.Screen 
            name='PokemonList'
            component={PokemonListScreen}
          />
          <Stack.Screen 
            name='PokemonDetail'
            component={PokemonDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

registerRootComponent(App);