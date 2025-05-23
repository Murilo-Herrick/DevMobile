import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);

  async function loadSound() {
    console.log('Carregando Som...');
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('./assets/560446music.mp3')
      );
      setSound(sound);
      console.log('Som Carregado');
    } catch (error) {
      console.error('Erro ao carregar som: ', error);
    }
  }

  async function playSound() {
    if (sound) {
      console.log('Tocando Som...');
      try {
        await sound.playAsync();
        setIsPlaying(true);
      } catch (error) {
        console.error('Erro ao tocar o som: ', error);
      }
    }
  }

  async function pauseSound() {
    if (sound && isPlaying) {
      console.log('Pausando Som...');
      try {
        await sound.pauseAsync();
        setIsPlaying(false);
      } catch (error) {
        console.error('Erro ao pausar o som: ', error);
      }
    }
  }

  async function unloadSound() {
    if (sound) {
      console.log('Descarregando Som...');
      try {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
        setIsPlaying(false);
        console.log('Som Descarregado');
      } catch (error) {
        console.log('Erro ao descarregar o som: ', error);
      }
    }
  }

  async function setLooping() {
    if (sound) {
      try {
        await sound.setIsLoopingAsync(!isLoop);
        setIsLoop(!isLoop);
        console.log('Looping: ', !isLoop);
      } catch (error) {
        console.error('Erro ao definir o looping: ', error);
      }
    }
  }

  useEffect(() => {
    loadSound();
    return () => {
      console.log('Desmontando componente, descarregando som...');
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button title={isPlaying ? 'Pausar Som' : 'Tocar Som'} onPress={isPlaying ? pauseSound : playSound} disabled={!sound} />
      <Button title={isLoop ? 'Desativar Loop' : 'Ativar Loop'} onPress={setLooping} disabled={!sound} />
      <Button title="Descarregar Som" onPress={unloadSound} disabled={!sound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
