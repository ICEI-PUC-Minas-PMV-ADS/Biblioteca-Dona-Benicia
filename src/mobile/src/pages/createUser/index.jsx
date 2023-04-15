import {
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export default function CreateUser() {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/livraria.png')}
        style={styles.backgroundImage}>
        <View style={styles.rectangle}>
          <View style={styles.form}>
            <TouchableOpacity onPress={handleHome}>
              <Text style={{ color: 'blue', marginTop: 10 }}>Menu</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Inscreva-se</Text>
            <Text style={styles.subtitle}>
              Inscreva-se para obter acesso aos recursos exclusivos da nossa
              biblioteca
            </Text>
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input} placeholder="Sobrenome" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" />
            <TextInput style={styles.input} placeholder="trocar a Senha" />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
