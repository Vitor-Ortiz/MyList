import { StatusBar } from 'expo-status-bar';
import {Link} from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={require('../assets/shitpost.jpg')} style={styles.logo}/>

      </View>
      <View>

      </View>
      <Text>Welcome!</Text>
      <Link href={"/home"}>
      <Text> Acessar</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
 
  },
  containerImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: 'cover',
  },
});
