import { Text, View, StyleSheet } from 'react-native';

export default function profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile screen</Text>
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
    },
});
