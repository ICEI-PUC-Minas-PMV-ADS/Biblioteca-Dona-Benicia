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

  
  
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 30,
    shadowColor: '#000',
    backgroundColor:'#337561',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  contentContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
    color: '#FFFFFF',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#C8CAEF',
    marginBottom: 16,
    fontSize: 16,
  },
  uploadButton: {
    backgroundColor: '#337561',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
},
button: {
  backgroundColor: '#B2FFE8',
  position: 'absolute',
  borderRadius: 5,
  width: 100,
  fontSize: 16,
  fontWeight: 'bold',
  alignItems: 'center',
  height: 37,
  left: 110,
  padding: 10,
  top: 730,
  color: '#2F3678',
  
},
});
