// Importa o React e os hooks useState e useEffect, que permitem gerenciar estado e efeitos colaterais no componente
import React, { useState, useEffect } from "react";

// Importa os componentes Text e View da biblioteca React Native para compor a interface
import { Text, View } from "react-native";

// Importa o módulo de localização do Expo, que permite acessar a localização do dispositivo
import * as Location from "expo-location";

// Importa os estilos definidos em um arquivo separado chamado "styles"
import styles from "./styles";

// Declara uma constante com a chave da API do Google Maps (deve ser preenchida para funcionar corretamente)
const API_KEY = "";

// Define a URL base da API de geocodificação do Google, que será usada para obter o endereço a partir das coordenadas
const URL = `https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;


// Declara o componente funcional principal chamado WhereAmI
export default function WhereAmI() {
  // Cria um estado 'address' com valor inicial "loading...", para armazenar o endereço obtido
  const [address, setAddress] = useState("loading...");

  // Cria um estado 'longitude' para armazenar a longitude atual do dispositivo
  const [longitude, setLongitude] = useState();

  // Cria um estado 'latitude' para armazenar a latitude atual do dispositivo
  const [latitude, setLatitude] = useState();

  // useEffect é um hook que executa um efeito colateral assim que o componente é montado
  useEffect(() => {
    // Função responsável por tratar os dados da posição recebida
    function setPosition(location) {
      const { latitude, longitude } = location.coords; // Desestrutura as coordenadas latitude e longitude
      
      // Atualiza o estado com a longitude atual
      setLongitude(longitude);

      // Atualiza o estado com a latitude atual
      setLatitude(latitude);

      // Faz uma requisição para a API do Google Maps para converter coordenadas em endereço
      fetch(`${URL}${latitude},${longitude}`)
        .then((resp) => resp.json()) // Converte a resposta em JSON
        .then(({ results }) => {
          // Se houver resultados, atualiza o estado 'address' com o endereço formatado
          if (results.length > 0) {
            setAddress(results[0].formatted_address);
          }
        })
        .catch((error) => {
          // Caso ocorra erro na requisição, imprime o erro no console
          console.log(error.message);
        });
    }

    // Declara uma variável para armazenar o "watcher" (observador da posição)
    let watcher;

    // Função assíncrona imediatamente invocada para lidar com permissões e localização
    (async () => {
      // Solicita permissão ao usuário para acessar a localização enquanto o app estiver em primeiro plano
      let { status } = await Location.requestForegroundPermissionsAsync();

      // Se a permissão não for concedida, sai da função
      if (status !== "granted") {
        return;
      }

      // Obtém a posição atual do dispositivo
      let location = await Location.getCurrentPositionAsync({});

      // Chama a função setPosition passando a localização obtida
      setPosition(location);

      // Inicia a observação contínua da posição, chamando setPosition sempre que a posição mudar
      watcher = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.Highest }, // Define a maior precisão possível
        setPosition // Função chamada toda vez que a posição mudar
      );
    })();

    // Retorna uma função de limpeza que será executada quando o componente for desmontado
    return () => {
      watcher?.remove(); // Remove o observador de posição se ele existir
    };
  }, []); // O array vazio indica que o useEffect será executado apenas uma vez (quando o componente for montado)

  // Retorna o layout do componente: uma View com três Texts mostrando endereço, latitude e longitude
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address: {address}</Text>
      <Text style={styles.label}>Latitude: {latitude}</Text>
      <Text style={styles.label}>Longitude: {longitude}</Text>
    </View>
  );
}
