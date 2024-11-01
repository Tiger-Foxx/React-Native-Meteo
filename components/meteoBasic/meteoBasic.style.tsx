import { StyleSheet } from "react-native";
import {bold} from "colorette";

 const s = StyleSheet.create({
    clock:{
        alignItems:'flex-end',
    },
    label:{
        alignSelf:'flex-end',
        transform:[{rotate:"-90deg"}],
        marginTop:25,
    },
     image:{
        height:90,
         width:90,
         // backgroundColor:"white",
     },

     city:{
        fontSize:20,
         fontWeight:'bold',
     },

     temp_container:{
        flexDirection:"row",
         justifyContent:"space-between",
         alignItems:"center",
     },
     temperature:{
        fontSize:150,
     },
     container_temp:{
        flexDirection:'column',
         // borderColor:'red',
         // borderWidth:2,
         alignItems:'baseline',
         justifyContent:'space-between'

     },
     btn_week:{
        borderWidth:2,
         width : 220,
         borderColor:'white',
         display:'flex',
         justifyContent:"center",
         alignItems:"center",
         height: 50,
         borderRadius:15,
         margin:0,
         backgroundColor:'rgba(0,0,0,0.27)'



     },
     btn_week_text:{
        fontSize:25,
         fontWeight: 'bold',
     }
    
})


export {s};
