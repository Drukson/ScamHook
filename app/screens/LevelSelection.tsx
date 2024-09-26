import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';

type LevelSelectionProps = {
  onSelectLevel: (level: string) => void;
  onGoBack: () => void;
};

const LevelSelection: React.FC<LevelSelectionProps> = ({ onSelectLevel, onGoBack }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.jpeg')}  // Replace with your background image path
      style={styles.backgroundImage}
      resizeMode="cover"  // Adjust based on how you want the background to be displayed
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/shieldicon.png')} style={styles.logo} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>LEVEL UP</Text>
          <Text style={styles.headerHighlight}>NOW</Text>
        </View>
        <View style={styles.levelContainer}>
          <TouchableOpacity onPress={() => onSelectLevel('beginner')}>
            <Image source={require('../../assets/images/levelback.png')} style={styles.levelImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSelectLevel('intermediate')}>
            <Image source={require('../../assets/images/levelinter.png')} style={styles.levelImage} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onGoBack} style={styles.backContainer}>
          <Image source={require('../../assets/images/back.png')} style={styles.backIcon} />
          <Text style={styles.backText}>BACK</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 140,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -60,
  },
  header: {
    fontSize: 40,
    color: '#049bb8',
    textAlign: 'center',
    fontWeight: '600',
  },
  headerHighlight: {
    fontSize: 40,
    color: '#fc3b50',
    textAlign: 'center',
    fontWeight: '600',
  },
  levelContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: -80,
  },
  levelImage: {
    width: width * 1.1,
    height: undefined,
    aspectRatio: 4,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  backContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  backText: {
    color: '#fc3b51',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LevelSelection;
