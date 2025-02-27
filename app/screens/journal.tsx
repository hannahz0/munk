import { Text, View, TextInput, StyleSheet } from 'react-native';
import React, {useState} from 'react'

export default function profile() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Journaling Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter your thoughts ₍ᐢ•ﻌ•ᐢ₎"
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFB6C1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ad5775',
      fontSize: 20,
      fontWeight: 'bold',
    },
    input: {
      height: 300,
      width: 400,
      borderColor: '#ad5775',
      borderWidth: 3,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});