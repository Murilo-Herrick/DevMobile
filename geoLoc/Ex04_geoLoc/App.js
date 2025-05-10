// Importa o React e o hook useState para gerenciar estados do componente
import React, { useState } from "react";

// Importa os componentes View (container visual), Text (texto), e StatusBar (barra de status)
import { View, Text, StatusBar } from "react-native";

// Importa o componente MapView (mapa) e Polygon (para desenhar áreas com múltiplos pontos)
import MapView, { Polygon } from "react-native-maps";

// Importa o objeto de estilos personalizados definido no arquivo styles.js
import styles from "./styles";

// Comentário informando que é necessário instalar a dependência do mapa com Expo antes de rodar
// Comando: npx expo install react-native-maps,
// Define a aparência da barra de status como "dark-content" (ícones escuros, fundo claro)
StatusBar.setBarStyle("dark-content");

// Define um tipo Overlay (apenas para organização, não afeta o funcionamento direto em JS)
// Cada Overlay é composto por: um array de coordenadas (latitude e longitude),
// uma cor da borda (strokeColor) e a largura da borda (strokeWidth)
// type Overlay = {
//   coordinates: { latitude: number; longitude: number }[];
//   strokeColor: string;
//   strokeWidth: number;
// };
// Define uma área no mapa chamada ipaRegion, representada por um conjunto de coordenadas
const ipaRegion = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0695283 },
    { latitude: 43.8537168, longitude: -79.0700846 },
    { latitude: 43.8518394, longitude: -79.0725697 },
    { latitude: 43.8481651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0695283 }, // Fecha o polígono
  ],
  strokeColor: "coral", // Cor da borda do polígono
  strokeWidth: 4, // Espessura da borda
};
// Define uma segunda área no mapa chamada stoutRegion, também com coordenadas próprias
const stoutRegion = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0693283 },
    { latitude: 43.8517168, longitude: -79.0710046 },
    { latitude: 43.8518394, longitude: -79.0715697 },
    { latitude: 43.8491651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0693283 }, // Fecha o polígono
  ],
  strokeColor: "firebrick", // Cor da borda
  strokeWidth: 4, // Espessura da borda
};

// Declara o componente funcional chamado PlottingOverlays
export default function PlottingOverlays() {
  // Estado que armazena o estilo aplicado ao texto "IPA Fans"
  const [ipaStyles, setIpaStyles] = useState([
    styles.ipaText, // Estilo base
    styles.boldText, // Negrito inicialmente
  ]);
  // Estado que armazena o estilo aplicado ao texto "Stout Fans"
  const [stoutStyles, setStoutStyles] = useState([styles.stoutText]); // Sem negrito inicialmente

  // Estado que armazena qual região está desenhada no mapa
  const [overlays, setOverlays] = useState([ipaRegion]); // Começa com a região IPA

  // Função chamada ao clicar em "IPA Fans"
  function onClickIpa() {
    setIpaStyles([...ipaStyles, styles.boldText]); // Adiciona negrito
    setStoutStyles([stoutStyles[0]]); // Remove negrito de stout
    setOverlays([ipaRegion]); // Mostra região IPA no mapa
  }

  // Função chamada ao clicar em "Stout Fans"
  function onClickStout() {
    setStoutStyles([...stoutStyles, styles.boldText]); // Adiciona negrito
    setIpaStyles([ipaStyles[0]]); // Remove negrito de IPA
    setOverlays([stoutRegion]); // Mostra região Stout
  }
  // JSX de retorno do componente
  return (
    // Container principal com estilo
    <View style={styles.container}>
      {/* Container de textos clicáveis */}
      <View>
        {/* Texto "IPA Fans", com estilo e ação ao tocar */}
        <Text style={ipaStyles} onPress={onClickIpa}>
          IPA Fans
        </Text>
        {/* Texto "Stout Fans", com estilo e ação ao tocar */}
        <Text style={stoutStyles} onPress={onClickStout}>
          Stout Fans
        </Text>
      </View>
      {/* Componente de mapa, exibido com estilo próprio */}
      <MapView
        style={styles.mapView} // Estilo visual do mapa
        showsPointsOfInterest={false} // Oculta ícones como restaurantes, escolas, etc.
        initialRegion={{
          latitude: 43.8486744,
          longitude: -79.0695283,
          latitudeDelta: 0.002, // Zoom vertical
          longitudeDelta: 0.04, // Zoom horizontal
        }}
      >
        {/* Renderiza cada polígono da lista de overlays */}
        {overlays.map((v, i) => (
          <Polygon
            key={i} // Chave única para cada polígono (recomendado pelo React)
            coordinates={v.coordinates} // Coordenadas da área
            strokeColor={v.strokeColor} // Cor da borda
            strokeWidth={v.strokeWidth} // Espessura da borda
          />
        ))}
      </MapView>
    </View>
  );
}