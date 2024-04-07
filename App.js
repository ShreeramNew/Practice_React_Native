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
} from "react-native";
const TryImage = require("./assets/icon.png");
export default function App() {
   let ImageStyle = {
      flex: 1,
      display: "flex",
      paddingBottom: 20,
      justifyContent: "center",
      alignItems: "center",
   };

   let ViewStyle = {
      height: 200,
      width: 200,
      backgroundColor: "green",
      borderRadius: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   };

   let TextStyle = { color: "white", fontSize: 40 };
   let customViewStyle = {};

   const [isModalVisible, setIsModalVisible] = useState(false);

   return (
      <ImageBackground
         source={{
            uri: "https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         }}
         style={ImageStyle}
      >
         <Pressable>
            <View style={ViewStyle}>
               <Text style={TextStyle}>
                  India<Text style={{ color: "yellow" }}>Go</Text>
               </Text>
               <Button title="Show" onPress={() => setIsModalVisible(true)} />
            </View>
         </Pressable>
         <Modal visible={isModalVisible} animationType="slide" onRequestClose={()=>setIsModalVisible(false)}>
            <View style={{ padding: 20, backgroundColor: "midnightblue", height: 200 }}>
               <Text style={TextStyle}>I am a Modal</Text>
               <Button title="Close" onPress={() => setIsModalVisible(false)} />
            </View>
         </Modal>
      </ImageBackground>
   );
}
