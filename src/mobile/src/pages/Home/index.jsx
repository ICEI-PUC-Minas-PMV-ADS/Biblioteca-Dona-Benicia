import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/container/index';
import Footer from '../../components/footer/index';
import Menu from '../../components/Menu/index';
import { styles } from './style';

import api from '../../services/api';


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/livros')
      .then(response => {
        const filteredData = response.data.map(item => {
          return {
            id: item.id,
            title: item.title,
          }
        });
        setData(filteredData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <Container style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_X5TVDbVPQZssG5D0_oy_KJoJWts3ximHuyBB63c8AT_SA8ugzzdBJirZpkUJgL38rAc&usqp=CAU',
          }}
        />
        <Text style={styles.name}>Nme</Text>
      </View>

      <View style={styles.middleSection}>
        <Text>Bem-vindo, administrador. </Text>
        {data.map(item => (
        <View key={item.id}>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      ))}
        <Menu />
      </View>
      <View style={styles.bottomSection}>
        <Footer />
      </View>
    </Container>
  );
};
export default Home;
