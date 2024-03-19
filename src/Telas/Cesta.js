import React from "react";
import topo from '../../assets/topo.png'
import {  StyleSheet ,Image, Dimensions } from "react-native";


const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <Image source={topo} style={estilos.topo}/>;
}


const estilos = StyleSheet.create({
    topo: {
        width:'100%',
        height: 578 / 768 * width
    }
});