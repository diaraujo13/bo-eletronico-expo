//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-rapi-ui';

// create a component
const NewBO = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 27, fontFamily: "RobotoCondensed_700Bold" , marginBottom: 10 }}>BOLETIM DE OCORRÊNCIA - POLÍCIA MILITAR</Text>

            

         

            <Text style={{ fontSize: 20, fontFamily: "RobotoCondensed_400Regular" , marginBottom: 10 }}>UNIDADE RESPONSÁVEL</Text>
            <TextInput
                placeholder="Enter your text"
            />

            <View style={{backgroundColor: 'gray', padding: 5, marginVertical: 5, color: 'white'}}>
                <Text style={{ fontSize: 20, color: 'white', textAlign:'center', fontFamily: "RobotoCondensed_400Regular" , marginBottom: 10 }}>DADOS DA OCORRÊNCIA</Text>
            </View>

            <Text style={{ fontSize: 20, fontFamily: "RobotoCondensed_400Regular" , marginBottom: 10 }}>UNIDADE RESPONSÁVEL</Text>
            <TextInput
                placeholder="Enter your text"
            />

<Text style={{ fontSize: 20, fontFamily: "RobotoCondensed_400Regular" , marginBottom: 10 }}>UNIDADE RESPONSÁVEL</Text>
            <TextInput
                placeholder="Enter your text"
            />

<Text style={{ fontSize: 20, fontFamily: "RobotoCondensed_400Regular" , marginBottom: 10 }}>UNIDADE RESPONSÁVEL</Text>
            <TextInput
                placeholder="Enter your text"
            />

            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    },
});

//make this component available to the app
export default NewBO;
