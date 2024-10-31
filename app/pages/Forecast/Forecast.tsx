import React from "react";
import {s} from './Forecast.style'
import {Txt} from "@/components/txt/txt";
import {TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Container} from "../../../components/Container/Container"
import {any} from "prop-types";
import {ForecastListItem} from "@/components/ForecastListItem/ForecastListItem";
import {getWeatherInterpretation} from "@/services/meteo-service";
import {DAYS} from "@/services/date-service";




export function Forecast() {
  const nav = useNavigation();
  const { params} = useRoute();
   const parameters : any = params;
  // console.log("LES PARAMETRES SONT : ", params, "")
  const backButton = (
      <TouchableOpacity style={s.header_btn} onPress={() =>  nav.goBack()}>
        <Txt>{'<'}</Txt>
      </TouchableOpacity>
  );


  const header=(
      <View style={s.header}>
        {backButton}
        <View style={s.header_texts}>
          <Txt style={{fontWeight:'bold'}}>{parameters?.currentCity }</Txt>
          <Txt style={s.subtitle}>Previson sur 7 jours</Txt>
        </View>
      </View>
  )

const forecastList=(
    <View style={s.forecastList}>
        {parameters?.time?.map((time: any, index: number) => {
            const code=parameters.weathercode[index];
            const interpretation = getWeatherInterpretation(code)
            console.log("INTERPRETATION : ", code)
            const image = interpretation?.image
            const day= DAYS[new  Date(time).getDay()]
            const temperature = parameters.temperature_2m_max[index]
            return <ForecastListItem key={index} jour={day} image={image} date={time} temp={ Math.round(temperature) } ></ForecastListItem>


        })}
    </View>
)

  return <Container>
    {header}
      {forecastList}
        </Container>;
}