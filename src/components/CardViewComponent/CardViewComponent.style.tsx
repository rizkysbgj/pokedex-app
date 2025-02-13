import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  cardContainer: {
    backgroundColor: '#43C5A6',
    width: 170,
    height: 120,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  infoContainer: {
    width: 70,
    height: 70
  },
  typeContainer: {
    backgroundColor: '#5EDFC6',
    alignItems: 'center',
    borderRadius: 30,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    marginBottom: 7
  },
  imageContainer: {
    backgroundColor: 'yellow',
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

export default styles;