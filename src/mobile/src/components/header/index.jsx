import React from 'react';
import { Header, Avatar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Rectangle = ({ title, icon, to }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(to)}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconContainer}>{icon}</View>
    </TouchableOpacity>
  );
};


const MyHeader = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('home');
  };

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#B2FFE8" />
      <Header

        containerStyle={{ backgroundColor: '#B2FFE8' }}
        leftComponent={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column' }}>
              <Avatar source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_X5TVDbVPQZssG5D0_oy_KJoJWts3ximHuyBB63c8AT_SA8ugzzdBJirZpkUJgL38rAc&usqp=CAU' }} size="small" rounded />
              <Text style={{ color: '#0B0E61', marginTop: 8 }}>Nome do Usuário</Text>
            </View>
          </View>
        }
        rightComponent={
          <TouchableOpacity onPress={handleNavigation}>
            <View style={{ borderRadius: 50, backgroundColor: '#337561', padding: 8 }}>
              <MaterialCommunityIcons name="home" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
        }
        backgroundColor='#B2FFE8'

      />
    </View>
  );
};

export default MyHeader;
