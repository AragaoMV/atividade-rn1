import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./style";

export default function Form() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');


    const estilo = style();

    const enviaFormulario = () => {
        Alert.alert('Confirme seus dados', ` Nome: ${nome} \n Email: ${email} \n Endereço: ${address} \n Telefone: ${phone}`)
    }

    return <View style={estilo.container}>
        <Text style={estilo.titulo}>Formulário de Cadastro </Text>
        <View style={estilo.areaCadastro}>
            <TextInput
                style={estilo.compoCadastro}
                placeholder="Nome"
                placeholderTextColor="#111111"
                autoCapitalize="none"
                value={nome}
                onChangeText={setNome}
                keyboardType="default"
            />
            <TextInput
                style={estilo.compoCadastro}
                placeholder="Email"
                placeholderTextColor="#111111"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}

            />
            <TextInput
                style={estilo.compoCadastro}
                placeholder="Telefone"
                placeholderTextColor="#111111"
                autoCapitalize="none"
                keyboardType="phone-pad"
                maxLength={11}
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                style={estilo.compoCadastro}
                placeholder="Endereço"
                placeholderTextColor="#111111"
                autoCapitalize="none"
                keyboardType="default"
                value={address}
                onChangeText={setAddress}
            />

            <TouchableOpacity
                style={estilo.botao}
                onPress={() => enviaFormulario()}
            >
                <Text style={estilo.botaoTexto}>Enviar Dados</Text>
            </TouchableOpacity>

        </View>

    </View>
}