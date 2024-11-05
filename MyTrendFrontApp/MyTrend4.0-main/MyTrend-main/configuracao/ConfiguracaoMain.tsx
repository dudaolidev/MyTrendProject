import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

export default function ConfiguracaoMain({ navigation }) {
  const [notifications, setNotifications] = React.useState(true);

  const toggleNotifications = () => setNotifications(!notifications);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      
      <View style={styles.setting}>
        <Text style={styles.settingText}>Notificações</Text>
        <Switch
          value={notifications}
          onValueChange={toggleNotifications}
        />
      </View>
      
      <View style={styles.setting}>
        <Text style={styles.settingText}>Idioma</Text>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>Português (Brasil)</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.setting}>
        <TouchableOpacity onPress={handleEditProfile} style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Salvar Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    position: 'relative',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e60000',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 18,
    color: '#333',
  },
  languageButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#e60000',
    borderRadius: 5,
  },
  languageButtonText: {
    color: 'white',
    fontSize: 16,
  },
  editProfileButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#e60000',
    borderRadius: 5,
  },
  editProfileButtonText: {
    color: 'white',
    fontSize: 16,
  },
  saveButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#e60000',
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
