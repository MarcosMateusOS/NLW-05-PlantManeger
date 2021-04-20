import React,{ useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { Feather } from '@expo/vector-icons';

import watering from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';



export function Welcome() {

   
    return(

        <SafeAreaView style={styles.container}>
            
            <Text style={styles.title}> 
                 Gerencie {'\n'}
                 suas plantas {'\n'}
                 de forma fácil 
            </Text>

          
            <Image 
                source={watering} 
                style={styles.img}
                resize='contain' 
            />
            
            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity 
              style={styles.button} 
              activeOpacity={0.8} 
            >

                <Text style={styles.buttonText}>
                    <Feather
                        name="chevron-right" 
                        style={styles.buttonIcon}
                    />
                </Text>

            </TouchableOpacity>
          
        </SafeAreaView>
      

    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'space-around'
    },
    title:{
        fontSize:32,
        fontWeight: 'bold',
        textAlign:'center',
        color:colors.heading,
        marginTop:38,
        fontFamily: fonts.heading
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    img:{
        
        height:Dimensions.get('window').width * 0.7
    },
    button:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        marginBottom:10,
        height:56,
        width:56,
    },
    buttonIcon:{
        fontSize:24,
        color:colors.white
    }
});
