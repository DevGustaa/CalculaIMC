import React from "react";
import { View, Text } from "react-native"
import style from "../title/style"

export default function Title(){
    return(
        <View style={style.BoxTitle}>
            <Text style={style.TextTitle}>Health</Text>
        </View>
    );
}