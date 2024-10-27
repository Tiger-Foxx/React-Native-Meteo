import { Children, ReactNode } from "react";
import { StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import s from "./txt.style";
interface TxtProps {
    children?: React.ReactNode;
    style?: StyleProp<TextStyle>;

  }
  
  export function Txt({ children ,style }: TxtProps) {
    return <Text style={[s.text,style]}>{children}</Text>;
  }