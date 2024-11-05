import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleLoginPress = async () => {
    setIsSending(true);
    try {
      const storedUser = await AsyncStorage.getItem('user');
      const userData = JSON.parse(storedUser);

      setTimeout(() => {
        if (userData && userData.email === email && userData.senha === senha) {
          setIsSending(false);
          navigation.navigate('ConfirmacaoLogin'); 
        } else {
          setIsSending(false);
          Alert.alert('Erro', 'Email ou senha incorretos.');
        }
      }, 2000);
    } catch (error) {
      setIsSending(false);
      Alert.alert('Erro', 'Ocorreu um erro ao realizar login.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo de volta!</Text>
      <Text style={styles.enterText}>Entre em sua conta</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email de acesso"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="gray"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
          <Text style={styles.esqueciSenhaText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLoginPress} style={styles.loginButton} disabled={isSending}>
        <Text style={styles.buttonText}>{isSending ? 'Entrando...' : 'Entrar'}</Text>
      </TouchableOpacity>

      <Text style={styles.Ou}> Ou</Text>

      <View style={styles.googleContainer}>
        <TouchableOpacity style={styles.googleButton}>
          <Image source={require('../src/assents/google.png')} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Entrar com sua conta Google</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.naoTemConta}>
        Não tem uma conta?
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.cadastrar}> Cadastrar</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  welcomeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 50,
  },
  enterText: {
    textAlign: 'justify',
    marginTop: 50,
    fontSize: 18,
    marginBottom: 0,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: '#e60000',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  Ou: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  googleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  googleButton: {
    backgroundColor: 'lightgray',
    paddingVertical: 10 ,
    paddingHorizontal: 100, 
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxImage: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  checkboxText: {
    fontSize: 16,
  },
  esqueciSenhaButton: {
    marginLeft: 'auto',
  },
  esqueciSenhaText: {
    fontSize: 16,
    color: '#e60000', 
    textDecorationLine: 'underline',
    textAlign: 'justify',
    
  },
  naoTemConta: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cadastrar: {
    textAlign: 'justify',
    marginLeft: 3,
    color: '#e60000', 
    fontWeight: 'bold',
  },
});
