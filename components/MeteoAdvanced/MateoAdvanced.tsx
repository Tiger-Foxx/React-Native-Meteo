import {s} from './MeteoAdvanced.style'
import {View} from "react-native";
import {Txt} from "@/components/txt/txt";

type MeteoAdvancedAttributes={
    dusk? : string | any,
    dawn? : string | any,
    wind? : string | any,
}

export function MeteoAdvanced({dusk , dawn , wind} : MeteoAdvancedAttributes){
    return (<>
    <View style={s.container}>
       <View style={{alignItems:'center'}}>
           <Txt style={{fontSize:26,}}>{dawn}</Txt>
           <Txt style={{fontSize:20,}}>Aube</Txt>
       </View>
        <View style={{alignItems:'center'}}>
            <Txt style={{fontSize:26,}}>{dusk}</Txt>
            <Txt style={{fontSize:20,}}>Crépuscule</Txt>
        </View>
        <View style={{alignItems:'center'}}>
            <Txt style={{fontSize:26,}}>{wind} km/h</Txt>
            <Txt style={{fontSize:20,}}>Vent</Txt>
        </View>
    </View>
    </>);
}