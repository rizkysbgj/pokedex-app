import { View, Text, Image } from 'react-native';

import { styles, elementCard } from './CardViewComponent.style'
import { Props } from './CardViewComponent.config';

const CardViewComponent = (props: Props) => {
  const { pokemon: { id, name, types }} = props;
  const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

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
    <View style={[styles.cardContainer, elementCard(types[0]).card]}>
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>
          {name}
        </Text>
        <>
          { types.map((type, index) => renderType(type, index)) }
        </>
      </View>
      <View>
        <Image
          style={styles.imageContainer}
          source={{uri: imageSource}}
        />
      </View>
    </View>
  );
}

export default CardViewComponent;