import { StyleSheet, View, Text } from "react-native";

import Interruptor from '../components/Interruptor'

export default function PainelDeControleScreen() {



    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        paineldecontrole: {
            fontSize: 20,
            fontWeight: 'bold',
        }
    });

    return (



        <View style={styles.container}>
            <View>
                <Text style={styles.paineldecontrole}>Painel de Controle da Casa:</Text>
            </View>
            <Interruptor nome={'Luz da Sala'} />
            <Interruptor nome={'Ar Condicionado'} />
            <Interruptor nome={'Luz do Quarto'} />

        </View>
    )




}