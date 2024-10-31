import { StyleSheet } from "react-native";

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
         alignItems:"baseline",
     },
     temperature:{
        fontSize:150,
     }
    
})


export {s};
