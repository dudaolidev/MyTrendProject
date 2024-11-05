import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro({ navigation }) {



  

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [termosChecked, setTermosChecked] = useState(false);

  const handleCadastrarPress = async () => {
    if (!nome || !sobrenome || !celular || !email || !senha || !confirmarSenha || !termosChecked) {
      Alert.alert('Erro', 'Preencha todos os campos e concorde com os Termos de Serviço e Política de Privacidade.');
      return;
    }

    try {
      const user = {
        nome,
        sobrenome,
        celular,
        email,
        senha,
      };

      await AsyncStorage.setItem('user', JSON.stringify(user));

      setTimeout(() => {
        Alert.alert('Sucesso', 'Cadastro concluído!');
        navigation.navigate('Login');
      }, 2000);
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao realizar o cadastro.');
    }
  };

  const toggleTermosCheck = () => {
    setTermosChecked(!termosChecked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Cadastre-se no MyTrend</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="gray"
          value={nome}
          onChangeText={setNome}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          placeholderTextColor="gray"
          value={sobrenome}
          onChangeText={setSobrenome}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Celular"
          placeholderTextColor="gray"
          value={celular}
          onChangeText={setCelular}
        />
      </View>

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
          placeholder="Senha"
          placeholderTextColor="gray"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          placeholderTextColor="gray"
          secureTextEntry={true}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </View>
      
      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleTermosCheck}>
        <View style={[styles.checkbox, termosChecked ? styles.checked : null]}>
          {termosChecked && <Text style={styles.checkMark}>✓</Text>}
        </View>
        <Text style={styles.checkboxText}>
          Eu concordo com os <Text style={styles.linkText}>Termos de Serviço</Text> e <Text style={styles.linkText}>Política de Privacidade</Text> do MyTrend.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCadastrarPress} style={styles.cadastrarButton}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'justify',
    marginTop: 1,
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#e60000', 
  },
  checkMark: {
    color: 'white',
    fontWeight: 'bold',
  },
  checkboxText: {
    fontSize: 12,
    flexWrap: 'wrap',
  },
  linkText: {
    color: '#e60000', 
    textDecorationLine: 'underline',
  },
  cadastrarButton: {
    backgroundColor: '#e60000', 
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
