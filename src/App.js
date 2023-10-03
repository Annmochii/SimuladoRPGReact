import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { Card } from './components/Card/index.js'


export default function App() {

  const [loaded] = useFonts({
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    MerriweatherLight: require('../assets/fonts/MerriweatherSans-Light.ttf'),
    MerriweatherRegular: require('../assets/fonts/MerriweatherSans-Regular.ttf'),
  });

  return (
    <View style={styles.container}>
      <Card style={styles.card} image='../assets/Diamond_Sword.webp' name='Espada de Diamante'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {

  }
});
