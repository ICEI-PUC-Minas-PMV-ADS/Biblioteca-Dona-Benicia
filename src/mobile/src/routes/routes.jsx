import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login/index';
import CreateUser from '../pages/createUser';
import Home from '../pages/Home/index';
import InclusaoObra from '../pages/inclusaoObra';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="createuser"
        component={CreateUser}
        options={{
          title: '',
          headerTintColor: '#FFF',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: '',
          headerTintColor: '#FFF',
          headerTransparent: true,
        }}
      />
       <Stack.Screen
        name="inclusaoObra"
        component={InclusaoObra}
        options={{
          title: '',
          headerTintColor: '#FFF',
          headerShown: false,
          statusBar: {
      backgroundColor: "#B2FFE8",
      barStyle: "dark-content",
    },
        }}
      />
    </Stack.Navigator>
  );
}
