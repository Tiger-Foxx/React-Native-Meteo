import { Coords } from "../pages/Home/home";
import axios from "axios";
export class MeteoAPI {
  static async fetchWeatherFromCoords(coords: Coords) {
   return (await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.long}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Africa%2FDouala`
    )).data;
  }

    static async fetchCity(coords: Coords): Promise<string | null> {
        console.log('Fetching city or village for hardcoded coordinates:', coords);
        try {
            const response = await axios.get(
                'https://nominatim.openstreetmap.org/reverse?format=json&lat=3.875&lon=11.5',
                {
                    headers: {
                        'User-Agent': 'react-native-meteo/1.0'
                    }
                }
            );
            const { address: { city, village ,city_district} } = response.data;
            console.log('Donnees de geolocalisations ', response.data);
            return city_district || city || village || null;
        } catch (e) {
            console.error("ERREUR : ", e);
            return null;
        }
    }
}




