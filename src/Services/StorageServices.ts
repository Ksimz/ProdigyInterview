import AsyncStorage from '@react-native-async-storage/async-storage';

// Example usage
export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
};

export const getData = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw error;
  }
};