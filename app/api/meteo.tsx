import { Coords } from "../pages/Home/home";
import axios from "axios";
export class MeteoAPI {
  static async fetchWeatherFromCoords(coords: Coords) {
   return (await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.long}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Africa%2FDouala`
    )).data;
  }
}
