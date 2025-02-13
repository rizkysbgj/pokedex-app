import { View, Text } from 'react-native';

import styles from './CardViewComponent.style'
import { Props } from './CardViewComponent.config';

const CardViewComponent = (props: Props) => {
  const { pokemon: { name, types }} = props;

  const renderType = (type: string, index: number) => {
    return (
      <View style={styles.typeContainer} key={index}>
          <Text style={styles.typeText}>
            {type}
          </Text>
        </View>
    );
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>
          {name}
        </Text>
        <>
          { types.map((type, index) => renderType(type, index)) }
        </>
      </View>
      <View>
        <View style={styles.imageContainer}></View>
      </View>
    </View>
  );
}

export default CardViewComponent;