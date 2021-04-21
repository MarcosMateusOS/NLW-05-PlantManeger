import React,{useState} from 'react';
import {StyleSheet,SafeAreaView,View,Text,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,Platform,Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {Button} from '../components/Button';


export function UserIndentification(){

    const navigation = useNavigation();
    const[isFocused, setIsFocused] = useState(false);
    const[isFilled,setisFilled] = useState(false);
    const[name,setName] = useState<string>();

    function handleSubmit(){
        navigation.navigate('Confirmation');
    }

    function handleInputBlur(){
        setIsFocused(false);
        setisFilled(!!name);
    }

    function handleInputFocus(){
           setIsFocused(true);
    }

    function handleInputChange(value: string){
        setisFilled(!!value);
        setName(value);
    }


    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ?'padding':'heading'}
            >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>

                    <View style={styles.form}>

                        <View style={styles.hearder}>
                            <Text style={styles.emoji}> 
                                {isFilled ? '😊' : '🥺'}
                            </Text>

                            <Text style={styles.title}>
                                Como podemos{'\n'}
                                chamar você?
                            </Text>
                        </View>
                    

                        <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && {borderColor: colors.green}
                            ]}
                            placeholder="Digite um nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChange = {handleInputChange}
                        />  

                        <View style={styles.buttonView}>
                            <Button
                                title="Confirmar" 
                                onPress={handleSubmit}
                            />
                        </View>

                    </View>

                

                </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    content:{
        flex:1,
        width:'100%',
    },
    form:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:54,
        alignItems:'center',
        width:'100%',
    },
    hearder:{
        alignItems:'center',
    },
    emoji:{
        fontSize:44
    },
    input:{
        borderBottomWidth:1,
        borderColor: colors.gray,
        color:colors.heading,
        width:'100%',
        fontSize:18,
        marginTop:50,
        padding:10,
        textAlign: 'center',
    },
    title:{
        fontSize:32,
        textAlign: 'center',
        color:colors.heading,
        fontFamily:fonts.heading, 
        marginTop:20
    },
    buttonView:{
        width:'100%',
        marginTop: 40,
        paddingHorizontal: 20
    }

});