
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import TextComp from '../../Components/TextComp';
import styles from './Style'


import imagePath from '../../constants/imagePath'
import colorPath from '../../constants/colorPath';


// create a component
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: null,
            email: ''

        }
    }
    Validation = () => {
        const { firstName, lastName, age, email } = this.state
        if (firstName == '' ) {
            alert("Please  Your firt name")

            return
        }
        if (lastName == '' ) {
            alert("Please Your last name")

            return
        }
        if (age == '' ) {
            alert("Please Your age")

            return
        }
        if (email == '' ) {
            alert("Please Your email")

            return
        }
        else {
            alert(firstName + "\n" + lastName + "\n" + age + "\n" + email)
        }
    }


    render() {

        const { firstName, lastName, age, email } = this.state


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

                            placeholder='Enter your first name'
                            TextInputStyle={{backgroundColor:colorPath.pink}}
                            required={true}
                            value={firstName}
                            placeholderTextColor={'white'}
                            onChangeText={firstName => this.setState({ firstName })} 
                            />


                        <TextComp
                            placeholder='Enter last name'
                            value={lastName}
                            placeholderTextColor={'white'}
                            TextInputStyle={{ backgroundColor: colorPath.green}}
                            onChangeText={lastName => this.setState({ lastName })} />

                        <TextComp
                            placeholder='Enter your age'
                            value={age}
                            placeholderTextColor={'white'}
                            keyBoardType={'numeric'}
                            TextInputStyle={{ backgroundColor: "#FF69B4" }}
                            onChangeText={age => this.setState({ age })} />

                        <TextComp
                            placeholder='Enter your email'
                            placeholderTextColor={'white'}
                            value={email}
                            keyBoardType={'email-address'}
                            TextInputStyle={{ backgroundColor: "gray" }}
                            onChangeText={email => this.setState({ email })} />
                    </ScrollView>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <ButtonComp
                        btnText='click me'
                        onPress={this.Validation
                        }
                    />
                </View>
            </View>
        );
    }
}



//make this component available to the app
export default Home;

