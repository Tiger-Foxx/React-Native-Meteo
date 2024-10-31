import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { Home } from "./pages/Home/home";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer , Theme } from "@react-navigation/native";
import {Forecast} from "@/app/pages/Forecast/Forecast";

// Définir le type de routes
type RootStackParamList = {
    Home: undefined | any;
    Forecast: undefined | any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const navTheme: Theme = {
    dark: false,
    colors: {
        primary: 'rgb(0, 122, 255)',
        background: 'transparent',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(224, 224, 224)',
        notification: 'rgb(255, 69, 58)',
    },
};
export default function Index() {
  const [loaded] = useFonts({
    AlataRegular: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return (
      <NavigationContainer independent={ true} theme={navTheme}>

              {loaded ? (
                  <Stack.Navigator initialRouteName={"Home"}>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false , animation:"fade" }}
                    />
                      <Stack.Screen
                          name="Forecast"
                          component={Forecast}
                          options={{ headerShown: false }}
                      />
                  </Stack.Navigator>
              ) : null}


      </NavigationContainer>
  );
}
