import { StyleSheet, Text, View } from 'react-native';
import Otpscreen from './screens/LoginScreen/Otpscreen'

export default function App() {
  return (
     <View style={styles.container}>

      <Otpscreen />
      
     </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
