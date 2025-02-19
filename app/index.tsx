import { Text, View,  StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Header from './components/Header';


export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Welcome to Munk App!</Text>
      <br></br>
      <Link href="/screens/profile" style={styles.button}>Go to Profile screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
});

