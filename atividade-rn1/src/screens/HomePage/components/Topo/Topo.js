import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./style";


export default function Header() {
    const estilo = styles();

    return <View style={estilo.container}>        
            <Text style={estilo.titulo}>Seja bem-vindo!</Text>
            <Text style={estilo.subtitulo}>Para continuar por favor preencha seu cadastro abaixo</Text>
    </View>

}