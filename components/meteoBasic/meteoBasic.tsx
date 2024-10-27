import React from "react";
import { Image, View } from "react-native";
import { Txt } from "../txt/txt";

type MeteoProps = {
  clock?: any;
  city?: any;
  label?: any;
  temp?: any;
  image?: any;
};

export function MeteoBasic({ clock, city, label, temp, image }: MeteoProps) {
  return (
    <>
      <View>
        <Txt>Clock</Txt>
      </View>
      <Txt>City</Txt>
      <Txt>Label</Txt>
      <View>
        <Txt>3°</Txt>
        <Image></Image>
      </View>
    </>
  );
}
