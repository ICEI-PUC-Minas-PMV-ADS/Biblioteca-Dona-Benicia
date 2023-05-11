import React, { useState } from 'react';
import { Text, TextInput, Image, TouchableOpacity, View, ScrollView, Platform } from 'react-native';
import MyHeader from '../../components/header';
import Container from '../../components/container/index';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import Footer from '../../components/footer/index';
import { styles } from './style';
import api from '../../services/api';
import axios from 'axios';
;
import { MaterialIcons } from '@expo/vector-icons'


const InclusaoObra = () => {

  const [livro, setLivro] = useState({
    titulo: '',
    autor: '',
    edicao: '',
    localPublicacao: '',
    editora: '',
    img: '',
    pdf: '',
    id: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const uploadImage = async (item_id) => {
    const apiUrl = `http://192.168.0.41/livros/imagens/${item_id}`; // inclui o item_id na URL

    setSelectedImage(null); // remove a imagem após o cadastro ser realizado
    const formData = new FormData();
    formData.append('file', {
      uri: selectedImage.uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    }); console.log("oi")

    console.log(apiUrl)
    try {
      console.log(formData)

      const response = await axios.post(apiUrl, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Imagem enviada com sucesso!');
      }
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar a imagem.');

    }
  };



  const handleSubmit = async () => {
    try {
      const response = await api.post('/livros', livro);
      console.log(response.data)
      console.log(response.data._id)
      const novoLivroId = response.data._id;

      uploadImage(novoLivroId)
      alert('Livro cadastrado com sucesso!');
      uploadPdf(novoLivroId);


    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao cadastrar o livro, tente novamente mais tarde.');
    }
  };




  //pdf
  const [selectedPdf, setSelectedPdf] = useState(null);
  const pickPdf = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });

    if (!result.cancelled) {
      setSelectedPdf(result);
    }
  };

  const uploadPdf = async (item_id) => {
    const apiUrl = `http://192.168.0.41/livros/pdfs/${item_id}`; // inclui o item_id na URL

    setSelectedPdf(null); // remove o arquivo após o cadastro ser realizado
    const formData = new FormData();
    formData.append('file', {
      uri: selectedPdf.uri,
      type: 'application/pdf',
      name: 'file.pdf',
    });

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('PDF enviado com sucesso!');
      }
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar o PDF.');

    }
  };








  const [itemId, setItemId] = useState(''); // estado para armazenar o item_id

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result);
    }
  };



  return (
    <Container style={styles.container}>
      <MyHeader />
      <View style={styles.middleSection}>
        <Text>Bem-vindo. </Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Título</Text>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={livro.titulo}
            onChangeText={(text) => setLivro({ ...livro, titulo: text })}
          />
          <Text style={styles.label}>Autor</Text>
          <TextInput
            style={styles.input}
            placeholder="Autor"
            value={livro.autor}
            onChangeText={(text) => setLivro({ ...livro, autor: text })}
          />
          <Text style={styles.label}>Edição</Text>
          <TextInput
            style={styles.input}
            placeholder="Edição"
            value={livro.edicao}
            onChangeText={(text) => setLivro({ ...livro, edicao: text })}
          />
          <Text style={styles.label}>Local de publicação</Text>
          <TextInput
            style={styles.input}
            placeholder="Local de Publicação"
            value={livro.localPublicacao}
            onChangeText={(text) => setLivro({ ...livro, localPublicacao: text })}
          />
          <Text style={styles.label}>Editora</Text>
          <TextInput
            style={styles.input}
            placeholder="Editora"
            value={livro.editora}
            onChangeText={(text) => setLivro({ ...livro, editora: text })}
          />
          <Text style={styles.label}>INCLUSÃO DE IMAGEM:</Text>
          <View style={styles.container}>
            {selectedImage ? (
              <>
                <Image source={{ uri: selectedImage.uri }} style={styles.ima} />
                <TouchableOpacity onPress={uploadImage}>
                </TouchableOpacity>
              </>) : (
              <TouchableOpacity onPress={pickImage}>
                <Text style={styles.buttonTex}>
                  <MaterialIcons name="add-a-photo" size={84} color="white" style={{ marginRight: 5 }} />
                  {'  '}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.label}>INCLUSÃO DE OBRA PDF:</Text>
          {selectedImage ? (
              <>
                <Image source={{ uri: selectedImage.uri }} style={styles.ima} />
                <TouchableOpacity onPress={uploadImage}>
                </TouchableOpacity>
              </>) : (
                <TouchableOpacity onPress={pickPdf}>
          
          <Text style={styles.buttonTex}>
            <MaterialIcons name="picture-as-pdf" size={84} color="white" style={{ marginRight: 5 }} />
            {'  '}
          </Text>
        </TouchableOpacity>
            )}
        
          <TouchableOpacity onPress={handleSubmit} style={styles.but}>
            <Text style={styles.tex}>Enviar imagem</Text>
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



