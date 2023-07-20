import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./style";
import Header from "./components/Topo/Topo";
import Form from "./components/Cadastro/Cadastro";

export default function HomePage() {

    const estilo = styles();

    return (<View style={estilo.container} >
        <Header />
        <Form />
    </View>
    );
}