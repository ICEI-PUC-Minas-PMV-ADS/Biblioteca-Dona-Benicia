import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
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

const Menu = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.rectanglesContainer}>
        <Rectangle
          title="Inclusão de obra catalogação"
          icon={<MaterialIcons name="add-circle" size={24} color="#fff" />}
          to="login"
        />
        <View style={styles.margin} />
        <Rectangle
          title="Consulta ao Acervo"
          icon={<MaterialIcons name="search" size={24} color="#fff" />}
          to="Consulta"
        />
        <View style={styles.margin} />
        <Rectangle
          title="Registro empréstimo / devolução"
          icon={<MaterialIcons name="library-books" size={24} color="#fff" />}
          to="Emprestimo"
        />
        <View style={styles.margin} />
        <Rectangle
          title="Emissão de multa"
          icon={<MaterialIcons name="attach-money" size={24} color="#fff" />}
          to="Multa"
        />
        <View style={styles.margin} />
        <Rectangle
          title="Cadastro de usuário"
          icon={<MaterialIcons name="person-add" size={24} color="#fff" />}
          to="Cadastro"
        />
        <View style={styles.margin} />
        <Rectangle
          title="Bloqueio e desbloqueio de usuário"
          icon={<MaterialIcons name="lock" size={24} color="#fff" />}
          to="Bloqueio"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#B2FFE8',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10,
  },

  rectanglesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#337561',
    marginVertical: 5,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    backgroundColor: '#191C3F',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    height: 10,
  },
});

export default Menu;
