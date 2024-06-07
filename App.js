import * as React from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImageViewScreen from "./app/screens/ImageViewScreen";
import InfoScreen from "./app/screens/InfoScreen";

// Create a stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={ImageViewScreen} />
          <Stack.Screen name="Info" component={InfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
