
import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import TextComp from '../../Components/TextComp';
import styles from './Style'


import imagePath from '../../constants/imagePath'
import colorPath from '../../constants/colorPath';
import navigationStrings from '../../constants/navigationStrings';


function Home({navigation, route}) {




    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        age: null,
        email: ''
    })


    const { firstName, lastName, age, email } = state

    const updateState = (data) => setState((state) => ({ ...state, ...data }))


const onClickMe = (text) =>{
    navigation.navigate(navigationStrings.SECOND_SCREEN,{name: text, data:[1,23.54,54], myObject: {name: 'React', rollNo: 343,}})
}
    return (
        <View style={styles.container}>

            <View style={styles.headerStyle}>
                <Image style={styles.ImgStyle} source={imagePath.icBack} />

                <Text style={styles.txtStyle}>Home</Text>
                <Text></Text>
            </View>

            <View style={{ marginTop: 32, flex: 1, justifyContent: 'center' }}>
                <ScrollView>
                    <TextComp

                        placeholder='Please enter your first name'
                        TextInputStyle={{ backgroundColor: colorPath.pink }}

                        value={firstName}
                        placeholderTextColor={'white'}
                        onChangeText={firstName => updateState({ firstName })}
                    />


                    <TextComp
                        placeholder='Please enter last name'
                        value={lastName}
                        placeholderTextColor={'white'}
                        TextInputStyle={{ backgroundColor: colorPath.green }}
                        onChangeText={lastName => updateState({ lastName })} />

                    <TextComp
                        placeholder='Please enter your age'
                        value={age}
                        placeholderTextColor={'white'}
                        keyBoardType={'numeric'}
                        TextInputStyle={{ backgroundColor: "#FF69B4" }}
                        onChangeText={age => updateState({ age })} />

                    <TextComp
                        placeholder='Please enter your email'
                        placeholderTextColor={'white'}
                        value={email}
                        keyBoardType={'email-address'}
                        TextInputStyle={{ backgroundColor: "gray" }}
                        onChangeText={email => updateState({ email })} />

                </ScrollView>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <ButtonComp
                    btnText='click me'
                    onPress={()=>onClickMe("Code Brew Labs")}
                    
                />
            </View>
        </View>
    )
}


//make this component available to the app
export default Home;

