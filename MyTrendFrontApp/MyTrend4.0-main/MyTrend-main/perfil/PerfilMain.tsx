import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PerfilMain() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundOverlay} />
      <View style={styles.content}>
        <View style={styles.profileSection}>
          <Image
            source={require('../src/assents/EU.png')}
            style={styles.profileImage}
          />
          <Text style={styles.nameText}>Gustavo Nunes</Text>
          <Text style={styles.birthdateText}>26/04/2004</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>? </Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>?</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>?</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 25,
    position: 'relative', 
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150, 
    backgroundColor: '#be2929',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#e60000',
    marginTop: 40,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e60000',
    marginTop: 10,
  },
  birthdateText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  infoContainer: {
    width: '100%',
    marginTop: 5,
  },
  infoBox: {
    borderWidth: 1,
    borderColor: '#e60000',
    borderRadius: 25,
    padding: 22,
    marginBottom: 25,
    backgroundColor: '#e60000', 
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
