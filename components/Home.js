import React from 'react'
import { View,StyleSheet } from 'react-native'

export default function Home() {
  return (
    <View style={[HomeStyle.container,HomeStyle.boxShadow]}> 
      
    </View>
  )
}

const HomeStyle=StyleSheet.create({
    container:{
        width:200,
        height:200,
        backgroundColor:'blue',
        marginTop:10
    },
    boxShadow:{
        shadowColor:'purple',
        shadowOffset:{
            width:9,
            height:10,
        },
        shadowOpacity:0,
        shadowRadius:0,
        elevation:10,
    }
})