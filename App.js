import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        drawerInactiveBackgroundColor : 'red'
      }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: (config) => {
              return <AntDesign name="home" size={24} color="black" />;
            },
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: (config) => {
              return <AntDesign name="contacts" size={24} color="black" />
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
