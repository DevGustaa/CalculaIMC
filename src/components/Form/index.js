import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native"
import ResultImc from "./ResultImc";

export default function Form(){
    
    const[height, setheight] = useState(null)
    const[weight, setweight] = useState(null)
    const[MensageImc, setMensageImc] = useState("Preencha o seu peso e altura")
    const[Imc, setImc] = useState(null)
    const[TextButton, setTextButton] = useState("Calcular")
    
    function ImcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))

    }

    function validationImc(){
        if ( weight != null && height != null){
            ImcCalculator()
            setheight(null)
            setweight(null)
            setMensageImc("Seu Imc é igual:")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMensageImc("preencha o peso e altura")

    }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex. 1.75" keyboardType="numeric" onChangeText={setheight} value={height}/>
                <Text>Peso</Text>
                <TextInput placeholder="Ex. 75.365" keyboardType="numeric" onChangeText={setweight} value={weight}/>
                <Button title={TextButton} onPress={() => validationImc()}/>
                <ResultImc MensageResultImc={MensageImc} ResultImc={Imc}/>
            </View>
        </View>
    );
}