import React from 'react'
import {
   View, 
   Text,
   SafeAreaView,
   ImageBackground,
   TextInput,
   TouchableOpacity 
  } from 'react-native'
import {Ionicons} from "@expo/vector-icons";
import { styles } from './style';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        resizeMode='repeat'
        style={{flex:1 , justifyContent: 'flex-start'}}>

          <View style={StyleSheet.header}>
            <Text style={styles.title}> Lista de Produtos</Text>
            <View>
              <Ionicons name="trash" size={32} color="#fff"/>

            </View>
          </View>

          {/* {lista de produtos} */}

          <View style={StyleSheet.footer}>
            <View style={styles.inputContainer}>
            <TextInput/>
            </View>
            <TouchableOpacity style={styles.inputContainer}>
              <Ionicons name="add" size={36} color="#fff"/>
            </TouchableOpacity>
          </View>

      </ImageBackground>
    </SafeAreaView>
  )
}