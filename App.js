import { useState } from "react";
import {
   View,
   Text,
   ImageBackground,
   Image,
   ScrollView,
   Button,
   Pressable,
   Modal,
   StatusBar,
   ActivityIndicator,
   Alert,
   StyleSheet,
} from "react-native";
import Home from "./components/Home";
const TryImage = require("./assets/icon.png");

export default function App() {

   let ViewStyle = {
      height: 200,
      width: 200,
      backgroundColor: "green",
      borderRadius: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   };

   let handlePress = () => {
      Alert.alert("My Title", "Yes It is Nice", [
         {
            text: "Cancel",
            onPress: () => {
               random = "super";
            },
         },
         {
            text: "sure",
            onPress: () => {
               random = "fine";
            },
         },
         ,
      ]);
   };

   return (
      <ImageBackground
         source={{
            uri: "https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         }}
         style={Styles.background}
      >
         <View style={ViewStyle}>
            <Text style={Styles.title}>
               India<Text style={{ color: "yellow" }}>Go</Text>
            </Text>
            <Button title="Show" onPress={handlePress} />
         </View>
        <Home/>
         <StatusBar />
      </ImageBackground>
   );
}

export const Styles = StyleSheet.create({
   title: {
      color: "white",
      fontSize: 40,
   },
   background: {
      flex: 1,
      display: "flex",
      paddingBottom: 20,
      justifyContent: "center",
      alignItems: "center",
   },
});
