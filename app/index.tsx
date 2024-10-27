import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { Home } from "./pages/Home/home";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import s from "./App.style";
import { useFonts } from "expo-font";
// import backgroundImg from "../assets/images/background.png";



export default function Index() {
  const [loaded] = useFonts({
    "AlataRegular": require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <>
    <ImageBackground source={require('../assets/images/background.png')} style={s.img_background} imageStyle={s.img}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home></Home>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
    </>
    
  );
}
