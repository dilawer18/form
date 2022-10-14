//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

// create a component
const TextComp = ({
    value={},
    onChangeText={},
    placeholder={},
    git TextInputStyle

}) => {
    return (
        <TextInput
                        style={{...styles.TextStyle,...TextInputStyle}}
                       onChangeText={onChangeText}
                        placeholder={placeholder}
                        value={value}

                        
                    />
      
    );
};



//make this component available to the app
export default TextComp;
const styles = StyleSheet.create({
    TextStyle:{
        backgroundColor: 'grey', 
        borderRadius: 8, paddingHorizontal: 8, marginTop: 20, height: 40 

    }
})
