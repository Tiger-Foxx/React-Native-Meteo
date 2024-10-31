import {StyleProp, TextStyle, View} from "react-native";
import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {s as sApp} from "../../app/App.style";

interface ContainerProps {
    children?: React.ReactNode;
    style?: StyleProp<TextStyle>;

}
export  function Container({ children ,style }: ContainerProps) {
    return (

            <ImageBackground
                source={require("../../assets/images/background.png")}
                style={sApp.img_background}
                imageStyle={sApp.img}
            >
                <SafeAreaProvider>
                    <SafeAreaView style={sApp.container}>
                        {children}
                    </SafeAreaView>
                </SafeAreaProvider>
            </ImageBackground>
    )
}