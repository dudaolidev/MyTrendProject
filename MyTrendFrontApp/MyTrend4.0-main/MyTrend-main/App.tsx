import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from './firstpage/HomeScreen';
import LoginPage from './login/LoginPage';
import Cadastro from './cadastro/Cadastro';
import ConfirmacaoLogin from './confirmacaologin/ConfirmacaoLogin';
import EsqueciSenha from './esquecisenha/EsqueciSenha';
import MainPage from './mainpage/MainPage';
import PerfilMain from './perfil/PerfilMain';
import ConfiguracaoMain from './configuracao/ConfiguracaoMain';
import EditProfile from './editProfile/EditProfile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="ConfirmacaoLogin" component={ConfirmacaoLogin} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="PerfilMain" component={PerfilMain} />
        <Stack.Screen name="ConfiguracaoMain" component={ConfiguracaoMain} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}