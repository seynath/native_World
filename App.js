import { StatusBar, setStatusBarHidden } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  Alert,
  SafeAreaView
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Greet from "./components/Greet";
const logoImage = require("./assets/adaptive-icon.png");
const cubeImg = require("./assets/favicon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);

  // const setIsStatusBarVisible = ()=>{
  //   setStatusBarHidden(!StatusBar)
  // }


  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={{ padding: 5, backgroundColor: "pink" }}>
      <View style={{ padding: 40, flex: 1 }}>
        <Text>Oiiien upour app!</Text>
        <Text style={{ backgroundColor: "plum", padding: 15 }}>hyhy</Text>
        <Image  source={logoImage} style={{ width: 100, height: 100 }} />
        <Image
          source={{ uri: "https://picsum.photos/id/237/400/400" }}
          style={{ width: 100, height: 100 }}
        />
        <ImageBackground source={cubeImg} style={{ width: 50, height: 50 }}>
          <Text style={{ color: "green", fontWeight: 500 }}>fff</Text>
          <Text style={{ color: "green", fontWeight: 500 }}>fff</Text>
        </ImageBackground>

        {/* Button */}

        <Button
          title="FB LOGIN"
          onPress={() => console.log("Ebuwaaaaa")}
          color={"blue"}
        />
        <Button
          title="FB LOGIN"
          onPress={() => console.log("Ebuwaaaaa")}
          color={"blue"}
          disabled
        />

        {/* PRessable */}
        <Pressable onPress={() => console.log("Mekath dddd ebuwa")}>
          <Text style={{ backgroundColor: "purple" }}>Heeee PRessble una</Text>
        </Pressable>

        <Text>
          abcdefghijklmnhhhopqrstufsvsfvsfdvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsvsfvsfdvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsvsfvsfdvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsvsfvsfdvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsvsfvsfdvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsvsfvsfdvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsvsfvsfdvfffffffffffffffffffffffffffffffffrrrrrfsvsfvsfdvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsvsfvsfdvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsvsfvsfdvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsvsfvsfdvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsvsfvsfdvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsvsfvsfdvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsvsfvsfdvfffffffffffffffffffffffffffffffffrrrrr
        </Text>
        <Text>gygygy</Text>
        <Text>gygygy</Text>

        <Button title="Active Modal" onPress={() => setIsModalVisible(true)} />

        <Button
          title="Status Bar Change"
          color={"blue"}
          onPress={() => {
            setIsStatusBarVisible(!isStatusBarVisible);
          }}
        />

        <Greet />

        <StatusBar
          backgroundColor="lightblue"
          hidden={isStatusBarVisible}
          barStyle="dark-content"
        />

        
        {/* Alert Buttons */}

        <Button
        title="Submit Button"
        onPress={()=>{Alert.alert("Invalid","Dob Aul ban",[
          {
            text:"Cancel",
            onPress: ()=>(console.log("Cancel"))

          },
          {
            text:"Ok",
            onPress: ()=>(console.log("Ok"))

          }

        ])}}

        />


      </View>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
      >
        <View style={{ padding: 40 }}>
          <Text>Hi Hi</Text>
          <Button
            title="See You Again"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
