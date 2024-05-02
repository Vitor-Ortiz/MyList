import {
   View, 
   Text,
   SafeAreaView,
   ImageBackground,
   TextInput,
   TouchableOpacity 
  } from 'react-native'
import {ionicons} from "@expo/vector-icons";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        resizeMode='repeat'
        style={{flex:1 , justifyContent: 'flex-start'}}>

      </ImageBackground>
    </SafeAreaView>
  )
}