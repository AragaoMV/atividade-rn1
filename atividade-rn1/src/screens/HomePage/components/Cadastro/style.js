import { StyleSheet } from "react-native";

export const style = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: "flex-start",

        },
        titulo: {
            fontSize: 20,
            fontStyle: "italic",
            marginTop: 10,
        },
        areaCadastro: {

            marginTop: 10,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        compoCadastro: {
            height: 40,
            width: '90%',
            backgroundColor: "#ffffff",
            marginBottom: 15,
            padding: 10,
            borderRadius: 5,
        },
        botao: {
            height: 40,
            width: 130,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
            backgroundColor: '#EBE46E',
          },
          botaoTexto: {
            fontSize: 18,
            fontWeight: '400',
            color: '#111111'
 
          }
    })
}