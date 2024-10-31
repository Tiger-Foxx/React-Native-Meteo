import {StyleSheet} from "react-native";


const s = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:10,

    },
    header_texts:{
        fontSize:20,
        flex:1,
        alignItems:'center',
        marginRight:30,
    },
    subtitle:{
        fontSize:17,
        color:'white'

    },
    header_btn:{
        width:30,

    }
    ,
    forecastList:{
        marginTop:50,
    }


})

export {s};