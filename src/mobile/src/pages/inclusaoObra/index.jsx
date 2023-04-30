import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity,ScrollView } from 'react-native';
import Container from '../../components/container/index';
import Footer from '../../components/footer/index';
import Menu from '../../components/Menu/index';
import { styles } from './style';
import MyHeader from '../../components/header';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//import api from '../../services/api';


const InclusaoObra = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [edicao, setEdicao] = useState('');
  const [localPublicacao, setLocalPublicacao] = useState('');
  const [editora, setEditora] = useState('');

  const handleCadastro = () => {
    console.log({
      titulo,
      autor,
      edicao,
      localPublicacao,
      editora
    });
  };

  


  return (
    
    <Container style={styles.container}>
    
    <MyHeader/>
      <View style={styles.middleSection}>
        <Text>Bem-vindo. </Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          value={titulo}
          onChangeText={setTitulo}
        />

        <Text style={styles.label}>Autor</Text>
        <TextInput
          style={styles.input}
          value={autor}
          onChangeText={setAutor}
        />

        <Text style={styles.label}>Edição</Text>
        <TextInput
          style={styles.input}
          value={edicao}
          onChangeText={setEdicao}
        />

        <Text style={styles.label}>Local de publicação</Text>
        <TextInput
          style={styles.input}
          value={localPublicacao}
          onChangeText={setLocalPublicacao}
        />

        <Text style={styles.label}>Editora</Text>
        <TextInput
          style={styles.input}
          value={editora}
          onChangeText={setEditora}
        />

        <Text style={styles.label}>Inclusão de imagem</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <MaterialCommunityIcons name="camera" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.label}>Inclusão de PDF</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <MaterialCommunityIcons name="file-pdf" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Incluir</Text>
        </TouchableOpacity>
      </View>


      </ScrollView>

      <View style={styles.bottomSection}>
        <Footer />
      </View>
    </Container>
  );
};
export default InclusaoObra;
