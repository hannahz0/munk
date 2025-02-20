import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header'

export default function profile() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Journal screen</Text>
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
      color: '#a66d45',
    },
});