import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function EsqueciSenha({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handleEnviarPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Email enviado com sucesso!');
    }, 2000); 
  };

  const handleCadastrarPress = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Trocar senha</Text>
      <Text style={styles.instructionsText}>
        Iremos te enviar um email com um link para resetar sua senha
      </Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu email de cadastro"
          placeholderTextColor="gray"
        />
      </View>

      <TouchableOpacity style={styles.sendButton} onPress={handleEnviarPress} disabled={loading}>
        <Text style={styles.sendButtonText}>{loading ? 'Enviando...' : 'Enviar'}</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.noAccountText}>
          Não tem uma conta? 
          <TouchableOpacity onPress={handleCadastrarPress}>
            <Text style={styles.cadastrarText}> Cadastrar</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 30,
  },

  instructionsText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  inputContainer: {
    marginBottom: 40,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    marginTop: 25,
  },

  sendButton: {
    backgroundColor: '#e60000',
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },

  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },

  bottomTextContainer: {
    marginTop: 100,
    alignItems: 'center',
  },

  noAccountText: {
    fontSize: 16,
    textAlign: 'center',
  },

  cadastrarText: {
    color: '#e60000',
    fontWeight: 'bold',
  },
});
