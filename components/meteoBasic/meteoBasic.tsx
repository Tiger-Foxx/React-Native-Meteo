import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import { Txt } from "../txt/txt";
import { s } from "./meteoBasic.style";
import {Clock} from "@/components/clock/clock";


type MeteoProps = {
  clock?: any;
  city?: any;
  label?: any;
  temp?: any;
  image?: any;
  interpretation?: any;
  onPress?:any;
};

export function MeteoBasic({ clock, city, label, temp, image,interpretation, onPress  }: MeteoProps) {
  return (
    <>
      <View style={s.clock}>
        <Clock></Clock>
      </View>
      <Txt style={s.city}>{city}</Txt>
      <Txt style={[{fontSize:20},s.label]}>{interpretation.label}</Txt>
        {/*<Txt>Temp</Txt>*/}
      <View style={s.temp_container}>
          <View style={s.container_temp} >

                  <TouchableOpacity onPress={onPress}>
                      <View style={s.btn_week} >
                          <Txt style={s.btn_week_text}>Cette semaine {'>'}</Txt>

                      </View>

                  </TouchableOpacity>

              <TouchableOpacity onPress={onPress}><Txt style={s.temperature}>{temp}°</Txt></TouchableOpacity>

          </View>
        <Image style={s.image} source={interpretation.image}></Image>
      </View>
    </>
  );
}
