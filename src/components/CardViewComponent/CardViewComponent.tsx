import { View, Text } from 'react-native';

import styles from './CardViewComponent.style'

const CardViewComponent = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>
          Bulbasaur
        </Text>
        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>
            Grass
          </Text>
        </View>
        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>
            Poison
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.imageContainer}></View>
      </View>
    </View>
  );
}

export default CardViewComponent;