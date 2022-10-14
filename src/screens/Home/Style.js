import { StyleSheet } from "react-native";



 const styles=StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:16,
        paddingVertical:24,
       
       
      },
      btn:{
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        height:40,width:'40%',
        alignSelf:'center',
        marginTop:400
      },
    imagestyle:{
        flexDirection:'row',
       
        justifyContent:'space-between'
    },
    ViewText:{
        flex :1,
        alignItems:'center',
    },
    txtStyle:{
        fontSize:30,
        fontWeight:'bold',
        color:'gray'
    },
    ImgStyle:{
        height:24,width:24
    },
    logostyle:{
        height:34,width:34
    }
})
export default styles