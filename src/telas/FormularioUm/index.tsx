import { Text, TextInput, View } from "react-native";
import { Input } from "../../components/input";

import { styles } from './styles';
import { useForm } from "react-hook-form";
import { useRef } from "react";


export function FormularioUm(){
    const { control, handleSubmit } = useForm();

    function handleNextStep(data: any){
        console.log(data);
    }

    const emailRef = useRef<TextInput>(null);

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Criar sua conta 
            </Text>

            <Input 
                icon="user"
                formProps={{ 
                    name: "name",
                    control
                }}
                inputProps={{
                    placeholder: "nome",
                    onSubmitEditing: () =>emailRef.current?.focus(),
                    returnKeyType: "next"
                }}
            />

            <Input 
                ref={emailRef}
                icon="mail"
                formProps={{ 
                    name: "email",
                    control
                }}
                inputProps={{
                    placeholder: "E-mail",
                    onSubmitEditing: () => handleSubmit(handleNextStep)
                }}
            />

            
        </View>
    )
}