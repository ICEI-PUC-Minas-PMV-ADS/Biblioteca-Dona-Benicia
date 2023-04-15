import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(48, 54, 108, 0.4)',
  },
  rectangle: {
    position: 'absolute',
    width: '80%',
    height: '100%',
    left: 29,
    top: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: '#0B0E61',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#0B0E61',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    color: '#0B0E61',
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#C8CAEF',
    color: '#7D7D7D',
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    marginTop: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
