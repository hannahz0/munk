import { Text, View,  StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Header from './components/Header';
import { Checkbox } from 'expo-checkbox';
import React, {useState} from 'react';

export default function Index() {
  const [isChecked1, setChecked1] = useState(false); ///
  const [isChecked2, setChecked2] = useState(false); ///
  const [isChecked3, setChecked3] = useState(false); ///
  return (
    <View style={styles.container}>
      <Header />
      <View style = {styles.titlecontainer}>
        <Text style={styles.text}>Welcome to Munk App!</Text>
        {/* <br></br>  */}
        <Link href="/screens/profile" style={styles.button}>Go to Profile screen</Link>
      </View>

      <View style={styles.trackercontainer}>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxContainer}>
            <Text style={styles.text}>drink water</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox color= "#d3c98b" value={isChecked1} onValueChange={setChecked1}
          />
          </View>
        </View>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxContainer}>
            <Text style={styles.text}>meditate</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox color= "#d3c98b" value={isChecked2} onValueChange={setChecked2}
          />
          </View>
        </View>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxContainer}>
            <Text style={styles.text}>journal</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox color= "#d3c98b" value={isChecked3} onValueChange={setChecked3}
          />
          </View>
        </View>
      </View>

      <View style = {styles.journalcontainer}>
        <Link href="/screens/journal" style={styles.button}>JOURNAL</Link>

        {/* <Text style={styles.text}>JOURNAL</Text> */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3ead6',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  titlecontainer: {
    flex: 1,
    backgroundColor: '#f3ead6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#a66d45',
    fontSize: 20,

  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#a66d45',
  },
  checkboxContainer: {
    gridTemplateRows: "2",
    width: "50%",
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    margin: 1,
  },
  trackercontainer: {
    gap: 8,
    margin: 20,
    backgroundColor: '#f3ead6',
  },
  journalcontainer: {
    gap: 8,
    margin: 20,
    height: "20%",
    padding: 20,
    backgroundColor: '#FFB6C1',
  },
});

