import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const ButtonComp = ({
    btnText = '',
    btnStyle = {},
    btnTextStyle = {},
    onPress = () => {}
}) => {


    return (
        <TouchableOpacity style={{...styles.btn,...btnStyle}}
        onPress={onPress}
            >
            <Text style={{...styles.click,...btnTextStyle}}>{btnText}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    click: {
        color: 'white'
      },
      btn:
      {
        backgroundColor: 'blue',
        height: 48,
        marginTop:20,
    
        width: '100%', 
        alignItems: "center", 
        justifyContent: 'center', 
        marginBottom: 24
      }
})


export default ButtonComp