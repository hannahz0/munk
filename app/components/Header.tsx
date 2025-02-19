// Header.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width; // Get screen width dynamically

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.leftContainer}>
            <Image source={require('../../assets/images/munk-logo.png')} style={styles.logo} />
            <Text style={styles.appName}>m u n k</Text>
        </View>

        <TouchableOpacity onPress={() => console.log('Menu Pressed')}>
                <Feather name="menu" size={32} color="#a66d45" />
        </TouchableOpacity>
        </View>

        <Image source={require('../../assets/images/pink plaid 3.png')} style={styles.banner} />
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
      top: 0, // Positioned at the top
      zIndex: 1,
    },
    leftContainer: {
      flexDirection: 'row', // Align logo and app name side by side
      alignItems: 'center', // Center items vertically
    },
    logo: {
      width: 70, // Logo width
      height: 70, // Logo height
      marginRight: 20, // Space between logo and text
      marginTop: 10, // Adjust margin to center vertically
    },
    appName: {
      fontSize: 30, // Font size for app name
      color: '#a66d45', // Color for app name
      fontWeight: 'light', // Font weight for app name
      // Make sure the font is properly loaded in your project
      fontFamily: 'KleeOne-Regular', // Font family (ensure this is linked properly)
    },
    menuContainer: {
      width: 50, // Reserves space for alignment
      alignItems: 'flex-end', // Align menu icon to the right
    },
    banner: {
      width: screenWidth, // Full width for banner image
      height: 150, // Adjust height as needed
      resizeMode: 'cover', // Ensure image covers the area properly
      marginTop: 100,
    },
});

export default Header;
