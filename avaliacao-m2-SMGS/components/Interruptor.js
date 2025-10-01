import { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

export default function interruptor(nome) {

    const [ligado, setLigado] = useState(false);


    const style = StyleSheet.create({
        componente:{
            borderWidth:1,
            margin:10,
            padding:10,
        }
    });



    return (

        

        <View style={style.componente}>
            <Text>{nome.nome} {ligado?'Ligado':'Desligado'}</Text>
            <Button title={!ligado?'Ligar':'Desligar'} onPress={() => {
                if (ligado == true) {
                    setLigado(false)
                } else {
                    setLigado(true)
                }

            }} ></Button>
        </View>
    )

}