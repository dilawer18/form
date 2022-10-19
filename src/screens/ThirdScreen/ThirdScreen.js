import { View,Text } from "react-native"


const ThirdScreen = ({route, navigation}) =>{

    console.log("third screen route",route)
    return(
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text>Third Screen</Text>
        </View>
    )
}

export default ThirdScreen