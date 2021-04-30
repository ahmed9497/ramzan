import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

const Splash = ({navigation}) => {


    useEffect(() => {
        
        // const timer = setTimeout(() => {
        //     navigation.replace("Login");
        // }, 3000);
        
        // return () => {
        //     clearTimeout(timer);
        // }
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Background.png')} style={styles.image}>
            <Image
        style={styles.tinyLogo}
        source={require('../assets/LogoMCN.png')}
      />
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent:'center',
      display:'flex',
      alignContent:'center',
    //   alignItems:'center'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    
    tinyLogo: {
        width: 150,
        height: 150,
        alignSelf:'center'
      },
  });

export default Splash;