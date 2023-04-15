import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('createuser');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/livraria.png')}
        style={styles.backgroundImage}>
        <View style={styles.rectangle}>
          <View style={styles.form}>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={{ color: 'blue', marginTop: 10 }}>
                Ir para a página Sobre
              </Text>
            </TouchableOpacity>
            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.subtitle}>Entrar na sua conta de usuário</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
