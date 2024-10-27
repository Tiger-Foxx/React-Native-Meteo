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

export type Coords = {
  lat: number | string;
  long: number | string;
};

export function Home({}) {
  const [coods, setCoords] = useState<Coords | undefined>();
  const [weather, setWeather] = useState<any>();

  //useFeects s'utilse pour definir le comportement de l'app a un moment donne , ici c'est au lancemant de ce coposant qu'on veut appeler getusercoords
  useEffect(() => {
    getUserCoords(); //get user coordinates
  }, []);

  // on cree un autre use effect qui cette fois ci va s'executer a chaque fois que coords change
  useEffect(() => {
    if (coods) {
      fetchWeather(coods);
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
  return (
    <>
      <View style={s.meteo_basic}>
      <MeteoBasic></MeteoBasic>
      </View>
      <View style={s.search_bar}></View>
      <View style={s.meteo_advanced}></View>
    </>
  );
}
