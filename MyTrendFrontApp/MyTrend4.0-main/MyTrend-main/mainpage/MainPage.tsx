import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Dimensions, ActivityIndicator } from 'react-native';

export default function MainPage({ navigation }) {
  const [scrollXTop, setScrollXTop] = useState(0);
  const [scrollXBottom, setScrollXBottom] = useState(0);
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCombined, setShowCombined] = useState(false);

  const scrollViewRefTop = useRef(null);  
  const scrollViewRefBottom = useRef(null);

  const { width } = Dimensions.get('window');

  const getBoxStyle = (isSelected) => {
    return isSelected ? styles.selectedBox : {};
  };

  const itemsTop = [
    { id: 1, image: require('../src/assents/camisetapreta.png'), label: 'Camiseta Preta' },
    { id: 2, image: require('../src/assents/camisetabranca.png'), label: 'Camiseta Branca' },
    { id: 3, image: require('../src/assents/camisetavinho.png'), label: 'Camiseta Vinho' },
    { id: 4, image: require('../src/assents/camisetarosa.png'), label: 'Camiseta Rosa' },
    { id: 5, image: require('../src/assents/camisetavermelha.png'), label: 'Camiseta Vermelha' }
  ];

  const itemsBottom = [
    { id: 6, image: require('../src/assents/calçaalfaiate.png'), label: 'Calça Alfaiate' },
    { id: 7, image: require('../src/assents/calçavinho.png'), label: 'Calça Vinho' },
    { id: 8, image: require('../src/assents/calçacargo.png'), label: 'Calça Cargo' },
    { id: 9, image: require('../src/assents/calçajeans.png'), label: 'Calça Jeans' },
    { id: 10, image: require('../src/assents/shortsmoletom.png'), label: 'Shorts Moletom' }
  ];

  const handleTopItemPress = (itemIndex) => {
    setSelectedTop(itemIndex);
    setSelectedBottom(null); // Desmarca o item selecionado na parte inferior
  };

  const handleBottomItemPress = (itemIndex) => {
    setSelectedBottom(itemIndex);
    setSelectedTop(null); // Desmarca o item selecionado na parte superior
  };

  const handleCombinePress = () => {
    if (selectedTop !== null && selectedBottom !== null) {
      setIsLoading(true); // Exibe a página "Pensando..."
      setTimeout(() => {
        setIsLoading(false);
        setShowCombined(true); // Mostra a combinação depois de um tempo
      }, 3000); // Simula um tempo de carregamento de 3 segundos
    }
  };

  const renderSelectedImages = () => {
    return (
      <View style={styles.combinedContent}>
        <View style={styles.selectedImageContainer}>
          {selectedTop !== null && (
            <Image source={itemsTop[selectedTop].image} style={styles.selectedImage} />
          )}
        </View>
        <View style={styles.selectedImageContainer}>
          {selectedBottom !== null && (
            <Image source={itemsBottom[selectedBottom].image} style={styles.selectedImage} />
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        // Página "Pensando..."
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Pensando...</Text>
          <ActivityIndicator size="large" color="red" style={styles.loadingSpinner} />
        </View>
      ) : showCombined ? (
        // Exibe as imagens combinadas
        <View style={styles.combinedPage}>
          <Text style={styles.combinedTitle}>Combinação Selecionada</Text>
          {renderSelectedImages()}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowCombined(false)}
          >
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Página principal
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>MyTrend</Text>

            <View style={styles.searchContainer}>
              <Image source={require('../src/assents/lupa.png')} style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar..."
                placeholderTextColor="gray"
              />
            </View>
          </View>

          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Meu Guarda Roupas</Text>
            </View>

            {/* Linha de boxes com rolagem horizontal (superior) */}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              ref={scrollViewRefTop}
              onScroll={(event) => setScrollXTop(event.nativeEvent.contentOffset.x)}
              scrollEventThrottle={16}
              style={styles.scrollView}
            >
              <View style={styles.boxContainer}>
                {itemsTop.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.box, getBoxStyle(selectedTop === index)]}
                    onPress={() => handleTopItemPress(index)}
                  >
                    <View style={styles.imageWrapper}>
                      <Image source={item.image} style={styles.boxImage} />
                    </View>
                    <Text style={styles.boxText}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            {/* Linha com botões "Combinar" e "+ Novo item" */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.combineButton} onPress={handleCombinePress}>
                <Text style={styles.buttonText}>Combinar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.newItemButton}>
                <Text style={styles.newItemButtonText}>+ Novo item</Text>
              </TouchableOpacity>
            </View>

            {/* Linha de boxes com rolagem horizontal (inferior) */}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              ref={scrollViewRefBottom}
              onScroll={(event) => setScrollXBottom(event.nativeEvent.contentOffset.x)}
              scrollEventThrottle={16}
              style={styles.scrollView}
            >
              <View style={styles.boxContainer}>
                {itemsBottom.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.box, getBoxStyle(selectedBottom === index)]}
                    onPress={() => handleBottomItemPress(index)}
                  >
                    <View style={styles.imageWrapper}>
                      <Image source={item.image} style={styles.boxImage} />
                    </View>
                    <Text style={styles.boxText}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('PerfilMain')}>
              <Image source={require('../src/assents/perfil.png')} style={styles.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
              <Image source={require('../src/assents/casinha.png')} style={styles.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('ConfiguracaoMain')}>
              <Image source={require('../src/assents/engrenagem.png')} style={styles.footerIcon} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 25,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  section: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  scrollView: {
    marginVertical: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,  // Aumentar o padding
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  selectedBox: {
    borderColor: 'red',
    borderWidth: 2,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxImage: {
    width: 100,  // Aumentar o tamanho da imagem
    height: 130,  // Aumentar o tamanho da imagem
    resizeMode: 'contain',
  },
  boxText: {
    marginTop: 5,
    fontSize: 16,  // Aumentar a fonte
    color: '#333',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  combineButton: {
    backgroundColor: 'red',
    paddingHorizontal: 40,  // Aumentar o padding
    paddingVertical: 15,  // Aumentar o padding
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,  // Aumentar a fonte
    fontWeight: 'bold',
  },
  newItemButton: {
    backgroundColor: 'transparent',
    borderColor: 'red',
    borderWidth: 2,
    paddingHorizontal: 30,  // Aumentar o padding
    paddingVertical: 15,  // Aumentar o padding
    borderRadius: 5,
    marginHorizontal: 10,
  },
  newItemButtonText: {
    color: 'red',  // Texto em vermelho
    fontSize: 18,  // Aumentar a fonte
    fontWeight: 'bold',
  },
  combinedPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  combinedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  combinedContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectedImageContainer: {
    marginBottom: 20,
  },
  selectedImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  closeButton: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,  // Aumentar o padding
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    width: 50,  // Aumentar o tamanho do ícone
    height: 50,  // Aumentar o tamanho do ícone
    resizeMode: 'contain',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loadingSpinner: {
    marginBottom: 10,
  },
});

