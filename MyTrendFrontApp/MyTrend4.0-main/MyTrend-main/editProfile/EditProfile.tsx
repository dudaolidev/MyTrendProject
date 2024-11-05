import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from 'react-native';

export default function EditProfile({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSavePress = () => {
    alert('Alterações salvas com sucesso!');
  };

  const handleBirthdateChange = (text) => {
    const formattedText = text.replace(/[^0-9/]/g, '');
    
    if (formattedText.length === 2 || formattedText.length === 5) {
      setBirthdate(formattedText + '/');
    } else {
      setBirthdate(formattedText);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('PerfilMain')}>
        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../src/assents/EU.png')}  
          style={styles.profileImage}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Aniversário"
          value={birthdate}
          onChangeText={handleBirthdateChange}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
        <Text style={styles.saveButtonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  editProfileButton: {
    alignItems: 'center',
  },
  editProfileButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e60000', // Cor alterada para vermelho
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#e60000', // Cor alterada para vermelho
  },
  inputContainer: {
    width: '100%',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#e60000', // Cor alterada para vermelho
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
