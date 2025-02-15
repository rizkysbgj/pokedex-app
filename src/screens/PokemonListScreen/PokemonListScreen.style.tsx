import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1
  },
  cardContainer: {
    marginBottom: 20
  },
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#FFFFFF'
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
  },
  titleText: {
    fontWeight: '900',
    fontSize: 30
  },
  titleContainer: {
    marginBottom: 40
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  buttonImage: {
    height: 40,
    width: 40
  }
});

export default styles;