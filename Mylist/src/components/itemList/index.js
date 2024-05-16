import React from 'react'
import { View, Text , TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import {styles} from "./style";
export default function ItemList(item , markItem, unmarkItem , removeItem) {
  return (
    <View style={styles.itemList}>
        <View style={{flex: 1}}>
      <Text style={styles.itemToBuy}>{item}</Text>
      </View>
    </View>
  )
}