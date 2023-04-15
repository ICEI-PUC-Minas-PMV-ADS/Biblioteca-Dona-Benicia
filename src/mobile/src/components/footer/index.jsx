import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contato: Projeto ADS PUC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#337561',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Footer;
