import React from "react";
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'
import {  StyleSheet ,Image, Dimensions, Text } from "react-native";
import {  View } from "react-native";



const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <> 
    
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhes da cesta</Text>

    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de verduras</Text>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Text style={estilos.nomeFazenda}>Jenny jack farm</Text>
        </View>
        
        <Text style={estilos.descricao}>
            Uma cesta com produtos 
            selecionados cuidadosamente 
            da fazenda jack farm
        </Text>
        <Text style={estilos.preco}>Preço:000</Text>
    </View>
    
  
    </>
   
}


const estilos = StyleSheet.create({
    topo: {
        width:'100%',
        height: 578 / 768 * width
    },

    titulo: {
        width:"100%",
        position:"absolute",
        textAlign:"center",
        marginTop: "10%",
        fontSize: 16,
        lineHeight: 26,
        color:"white",
        fontWeight: "bold",
        padding: 16
    },

    cesta:{
        paddingVertical:8,
        paddingHorizontal:16
    },

    nome:{
        fontSize:26,
        lineHeight:42,
        color:"#464646",
        fontWeight:"bold"
    },

    fazenda:{
        flexDirection:"row",
        paddingVertical:12
    },

    nomeFazenda:{
        fontSize: 16,
        lineHeight:26,
        marginLeft:12
    },

    imagemFazenda:{
        width:32,
        height:32
    },

    descricao:{
        color:"#A3A3A3",
        fontSize:16,
        lineHeight: 26
    },

    preco:{
        color:"#2A9F85",
        fontWeight:"bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8
    }




});