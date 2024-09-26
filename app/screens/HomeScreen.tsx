import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

type HomeScreenProps = {
  onPlay: () => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ onPlay }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.jpeg')}  // Replace with your background image path
      style={styles.backgroundImage}
      resizeMode="cover"  // Adjust based on how you want the background to be displayed
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
              <Image source={require('../../assets/images/shieldicon.png')} style={styles.logo} />
          <Text style={styles.logoText}>SCAMHOOK</Text>
        </View>
        <View style={styles.tagline}>
          <Text style={styles.taglineMain}>Let’s Play</Text>
          <Text style={styles.taglineSub}>Play now and Level up</Text>
        </View>
        <TouchableOpacity style={styles.playButton} onPress={onPlay}>
          <Text style={styles.playButtonText}>Play Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoText: {
    color: '#fdca30',
    fontSize: 48,
    marginTop: 10,
    fontWeight: '600'
  },
  tagline: {
    alignItems: 'center',
    marginBottom: 40,
  },
  taglineMain: {
    color: '#a46efc',
    fontSize: 32,
    marginBottom: 5,
    fontWeight: '600',
  },
  taglineSub: {
    color: '#a46efc',
    fontSize: 19,
  },
  playButton: {
    backgroundColor: '#fc3b50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  playButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default HomeScreen;
