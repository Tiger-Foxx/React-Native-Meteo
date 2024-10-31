import React from "react";
import {s} from './Forecast.style'
import {Txt} from "@/components/txt/txt";
import {TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Container} from "../../../components/Container/Container"
import {any} from "prop-types";




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

  return <Container>



    {header}


        </Container>;
}