// Header.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
// import * as SplashScreen from 'expo-splash-screen';

const screenWidth = Dimensions.get('window').width; // Get screen width dynamically

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.leftContainer}>
            <Image source={require('../../assets/images/munk-logo.png')} style={styles.logo} />
            <Text style={styles.appName}>munk.</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Feather name="menu" size={32} color="#a66d45" />
        </TouchableOpacity>

        </View>
        <View>
          <SafeAreaProvider>
            <SafeAreaView style={styles.bannerContainer} edges={['left', 'right']}>
              <ImageBackground source={require('../../assets/images/pink plaid 3.png')} style={styles.banner}>
                <Text style={styles.text}>welcome back!</Text>
              </ImageBackground>
            </SafeAreaView>
          </SafeAreaProvider>
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: screenWidth,
    },
    header: {
      width: screenWidth, // Full width
      flexDirection: 'row', // Align items in a row
      alignItems: 'center', // Center items vertically
      justifyContent: 'space-between', // Space between left (logo + name) and right (menu)
      height: 70, // Adjust height for the header
      backgroundColor: '#f3ead6', // Background color of the header
      paddingHorizontal: 20, // Padding on the sides
      position: 'absolute', // Fixed at the top
      zIndex: 1,
    },
    leftContainer: {
      flexDirection: 'row', // Align logo and app name side by side
      alignItems: 'center', // Center items vertically
    },
    logo: {
      width: 60, // Logo width
      height: 60, // Logo height
      marginRight: 20, // Space between logo and text
      // marginTop: 5, // Adjust margin to center vertically
    },
    appName: {
      fontSize: 30, // Font size for app name
      color: '#a66d45', // Color for app name
      // fontWeight: 'bold', // Font weight for app name
      // Make sure the font is properly loaded in your project
      fontFamily: 'KleeOne-Regular', // Font family (ensure this is linked properly)
    },
    menuContainer: {
      width: 50, // Reserves space for alignment
      alignItems: 'flex-end', // Align menu icon to the right
    },
    bannerContainer: {
      flex: 1, // Ensure it takes the full height available
      marginTop: 55,
    },
    banner: {
      width: screenWidth, // Full width for banner image
      height: 100, // Adjust height as needed
      resizeMode: 'cover', // Ensure image covers the area properly
      marginTop: 10,
      flex: 1,
    },
    text: {
      fontSize: 42,
      lineHeight: 84,
      color: '#73723b',
      fontWeight: '500',
      fontFamily: 'KleeOne-Regular',
      // textAlign: 'center',
      marginLeft: 20,
      marginTop: 15,
    },
});

export default Header;
