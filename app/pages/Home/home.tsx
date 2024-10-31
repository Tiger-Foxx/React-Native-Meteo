import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import s from "./Home.style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MeteoAPI } from "@/app/api/meteo";
import { Txt } from "@/components/txt/txt";
import { MeteoBasic } from "@/components/meteoBasic/meteoBasic";
import {getWeatherInterpretation} from "@/services/meteo-service";
import {MeteoAdvanced} from "@/components/MeteoAdvanced/MateoAdvanced";

export type Coords = {
  lat: number | string;
  long: number | string;
};

export function Home({}) {
  const [coods, setCoords] = useState<Coords | undefined>();
  const [weather, setWeather] = useState<any>();
  const [currentCity, setCurrentCity]= useState<any>();
  const currentWeather = weather?.current_weather;

  //useFeects s'utilse pour definir le comportement de l'app a un moment donne , ici, c'est au lancemant de ce coposant qu'on veut appeler getusercoords
  useEffect(() => {
    getUserCoords(); //get user coordinates
  }, []);

  // on crée un autre use effect qui cette fois-ci va s'executer à chaque fois que coords change
  useEffect(() => {
    if (coods) {
      fetchWeather(coods);
      fetchCity(coods);
    }
  }, [coods]);

  async function getUserCoords() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      //const location = await getCurrentPositionAsync();
      //setCoords({lat:location.coords.latitude,long:location.coords.longitude});

      // console.log(location);
      setCoords({ lat: "3.838752", long: "11.500173" });
    } else {
      setCoords({ lat: "48.85", long: "2.35" });
      console.log("Permission denied");
    }
  }

  async function fetchWeather(coordinatess:Coords) {
    //fetch
    const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinatess);
    setWeather(weatherResponse)
    console.log(weatherResponse);
  }
  async function fetchCity(coordinatess:Coords) {
    const cityResponse = await MeteoAPI.fetchCity(coordinatess);
    setCurrentCity(cityResponse);
    console.log(`La ville actuelle est ${cityResponse}`);
  }
  return  currentWeather? (

    <>
      <View style={s.meteo_basic}>
      <MeteoBasic temp={ Math.round( currentWeather?.temperature)}
                  interpretation={getWeatherInterpretation(currentWeather?.weathercode)}
                  city={currentCity}
      ></MeteoBasic>
      </View>
      <View style={s.search_bar}></View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced></MeteoAdvanced>
      </View>
    </>
  ) : null;
}
