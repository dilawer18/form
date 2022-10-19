
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';

// create a component
const SecondScreen = ({
    route, navigation
}) => {
const paramData= route?.params
    console.log(route,"route.....route")

    const onNextScreen = () =>{
        navigation.navigate(navigationStrings.THIRD_SCREEN,{data: paramData})
    }

    return (
        <View style={styles.container}>
            <Text>{paramData?.name}</Text>
            <ButtonComp btnText='GoBack' onPress={()=>navigation.goBack()} />

            <ButtonComp btnText='Go To Third Screen' onPress={onNextScreen} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SecondScreen;
