import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <Image style={styles.container}
    source={{uri:'https://i.pinimg.com/564x/68/1b/91/681b9124e00548043ad71f43f3201d29.jpg'}}
    
    />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  },
);
