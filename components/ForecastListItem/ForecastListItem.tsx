import {s} from './ForecastListItem.style';
import {Image, View} from "react-native";
import {string} from "prop-types";
import {Txt} from "@/components/txt/txt";

type ForecastListItemParams = {
    date?: any,
    jour ?: any,
    temp?: any,
    image?: any,
}

export function ForecastListItem({date, jour, temp, image}: ForecastListItemParams) {
    return (<>
    <View style={s.container} >
    <Image style={s.image} source={image}></Image>
        <Txt style={s.day}>{jour}</Txt>
        <Txt style={s.date}>{date}</Txt>
        <Txt style={s.temp}>{temp}°</Txt>
    </View>
    </>)
}