import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'locations';

export const saveLocation = async (newLocation) => {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    const locations = existing ? JSON.parse(existing) : [];
    locations.push(newLocation);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(locations));
  } catch (error) {
    console.error("Erro ao salvar local:", error);
  }
};

export const loadLocations = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Erro ao carregar locais:", error);
    return [];
  }
};

export const saveLocations = async (locations) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(locations));
  } catch (error) {
    console.error("Erro ao salvar locais:", error);
  }
};