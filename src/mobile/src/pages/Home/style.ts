import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  middleSection: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#337561',
  },
  bottomSection: {
    backgroundColor: '#337561',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    margin: 10,
    borderRadius: 8,
  },

  imageContainer: {
    flexDirection: 'column',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 30,
    marginTop: 50,
  },
  name: {
    fontSize: 9,
    marginLeft: 50,
  },
});
