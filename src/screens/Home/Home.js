
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import TextComp from '../../Components/TextComp';
import styles from './Style'


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
    render() {
        const { firstName, lastName, age, email } = this.state
        return (
            <View style={styles.container}>

                <View style={styles.imagestyle}>
                    <Image style={styles.ImgStyle} source={require('../../assets/images/images.png')} />
                    {/* <Image style={styles.logostyle} source={require('../../assets/images/logo.png')} /> */}
                    <Text style={styles.txtStyle}>Home</Text>
                    <Text></Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'grey' }}></View>
                <View>
                    {/* <Text>jhghjgjh</Text> */}
                </View>
                <View style={{ marginTop: 32, flex: 1, justifyContent: 'center' }}>
                    <TextComp
                        placeholder='Enter your email'
                        value={firstName}
                        onChangeText={firstName => this.setState({ firstName })} />


                    <TextComp
                    placeholder='enter last name'
                    value={lastName}
                    TextInputStyle={{backgroundColor:"red"}}
                    onChangeText={lastName=>this.setState({lastName})}/>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <ButtonComp
                        btnText='click me'
                        onPress={() =>
                            alert(firstName + "\n" + lastName + "\n" + age + "\n" + email)
                        }
                    />
                </View>
            </View>
        );
    }
}


//make this component available to the app
export default Home;

