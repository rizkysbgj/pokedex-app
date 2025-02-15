import { Colors } from '@/src/constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  cardContainer: {
    width: 170,
    height: 120,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  infoContainer: {
    width: 85,
    height: 70,
    marginLeft: 10
  },
  typeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    borderRadius: 30,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    marginBottom: 7
  },
  imageContainer: {
    width: 70,
    height: 70
  },
  nameText: {
    color: '#FFFFFF',
    fontWeight: '500',
    marginBottom: 10
  },
  typeText: {
    color: '#DBF8F3'
  }
});

const elementCard = (element: string) => {
  const lowerCasedElement = element.toLowerCase();
  return StyleSheet.create({
    card: {
      backgroundColor: Colors.pokemonType[lowerCasedElement]
   }
  });
}

export { styles, elementCard };