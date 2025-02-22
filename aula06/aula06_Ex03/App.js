import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, SectionList, ActivityIndicator, Switch, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [slideValue, setSlideValue] = useState(0);
    const [switchValue, setSwitchValue] = useState(false);

    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    const sections = [
        { title: 'Section 1', data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] },
        { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }] },
    ];

    const handlePress = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={{ uri: 'https://via.placeholder.com/300' }} style={styles.imageBackground}>
                <Text style={styles.title}>Exemplo de Código React Native</Text>
            </ImageBackground>

            <View style={styles.content}>
                <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />

                <TextInput 
                    style={styles.input} 
                    placeholder="Digite algo" 
                    value={text} 
                    onChangeText={setText} 
                />

                <Button title="Clique aqui" onPress={handlePress} />

                <TouchableOpacity style={styles.button} onPress={() => alert('TouchableOpacity pressionado!')}>
                    <Text style={styles.buttonText}>TouchableOpacity</Text>
                </TouchableOpacity>

                <ActivityIndicator animating={isLoading} />

                <Text>Valor do Slider: {slideValue}</Text>

                <Switch value={switchValue} onValueChange={setSwitchValue} />
                <Text>Switch: {switchValue ? 'Ligado' : 'Desligado'}</Text>

                <FlatList 
                    data={data} 
                    keyExtractor={(item) => item.id.toString()} 
                    renderItem={({ item }) => <Text>{item.name}</Text>} 
                />

                <SectionList 
                    sections={sections} 
                    keyExtractor={(item) => item.id.toString()} 
                    renderItem={({ item }) => <Text>{item.name}</Text>} 
                    renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>} 
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    content: {
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
});

export default App;