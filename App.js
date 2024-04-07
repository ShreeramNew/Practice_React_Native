import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontIncrease}>Jai Shreeram! Jai Hanuman</Text>
      <Button title='Superb experiance' onPress={()=>{Alert.alert('Jai Shreeram')}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontIncrease:{
    fontSize:40,
    color:'green'
  }
});
