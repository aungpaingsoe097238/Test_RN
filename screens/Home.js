import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { log } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home({ navigation }) {
  const [data, setData] = useState("");

  const doSomething = async () => {
    let currentData = { name : data }
    await AsyncStorage.setItem('data', JSON.stringify(currentData));
  };

  const getData = async () => {
    let result = await AsyncStorage.getItem('data');
    console.log( JSON.parse(result).name )
  }

  useEffect(()=>{
    getData();
  })

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Add Data"
        onChangeText={(text) => {
          setData(text);
        }}
        style={{
          borderWidth: 1,
          padding: 5,
          borderColor: "white",
          borderBottomColor: "black",
          marginBottom: 10,
        }}
      />
      <Button
        title="Add"
        onPress={() => {
          doSomething();
        }}
      />
    </View>
  );
}

export default Home;
