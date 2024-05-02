import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={require('../assets/shitpost.jpg')}
          style={styles.logo} />
      </View>
      <View style={styles.Content}>
        <Text style={styles.title}>MyList</Text>
        <Text styçe={styles.text}> monte sua lista e não esqueça mais o que precisa ao sair!</Text>
        <Link style={styles.button} href={"/home"}>
          <Text style={styles.buttonText}> Acessar</Text>
        </Link>
      </View>
      <StatusBar style="light" backgroundColor='#000' />
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
Content: {
  flex: 1,
  backgroundColor: '#dadada',
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  paddingHorizontal: '5%',
  
},
title:{
  fontSize: 30,
  fontWeight: 'bold',
  marginTop: 28,
  marginBottom: 20,
  textAlign: 'center'
},
text: {
  fontSize: 16,
  color: 'gray',
},
button: {
  position: 'absolute',
  backgroundColor: '#000',
  bottom: '15%',
  alignSelf: 'center',
  borderRadius: 50,
  paddingVertical: 15,
  width: '60%',
  textAlign: 'center',
},
buttonText:{
  fontSize: 20,
  color: '#fff',
  fontWeight: 'bold',
}
});
