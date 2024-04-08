import React from "react";
import { View, StyleSheet } from "react-native";

export default function Home() {
   return (
      <View style={HomeStyle.container}>
         <View style={HomeStyle.box}></View>
         <View style={HomeStyle.box}></View>
         <View style={HomeStyle.box}></View>
         <View style={HomeStyle.box}></View>
         <View style={[HomeStyle.box, HomeStyle.meBox]}></View>
         <View style={HomeStyle.box}></View>
         <View style={HomeStyle.box}></View>
         <View style={HomeStyle.box}></View>
         <View style={HomeStyle.box}></View>
         <View style={[HomeStyle.box, HomeStyle.meBox]}></View>
         <View style={[HomeStyle.box, HomeStyle.meBox]}></View>
      </View>
   );
}

const HomeStyle = StyleSheet.create({
   container: {
      display: "flex",
      width: 200,
      height: 200,
      backgroundColor: "blue",
      marginTop: 10,
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
      justifyContent: "center",
      alignContent: "center",
   },
   box: {
      width: 20,
      height: 20,
      backgroundColor: "green",
      borderWidth: 2,
      borderColor: "white",
      marginLeft: 4,
   },
   meBox:{
    flex:1
   }
   
});
