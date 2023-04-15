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
    marginRight: 10,
    marginLeft: 18,
    marginTop: 10,
  },
  name: {
    fontSize: 9,
    marginLeft: 18,
  },
});
