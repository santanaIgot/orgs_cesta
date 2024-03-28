
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/Telas/Cesta';

export default function App() {
  return (

    //view funciona como estrutura xml
    //View é um componente, text e Status bar
    // safe area cria uma barra nas bordas superiores dos app mobile
    
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}


