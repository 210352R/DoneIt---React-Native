import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity, // <-- import TouchableOpacity
} from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
        <Text>Hire Anything You Want </Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Info")}
        activeOpacity={0.9}
      >
        <View>
          <Text>Info</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() =>
          navigation.navigate("Details", {
            name: "Eshan",
          })
        }
        activeOpacity={0.9}
      >
        <View>
          <Text>Details</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 5,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  loginButton: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#F23BC4",
  },
  registerButton: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#2E92F2",
    alignItems: "center",
    marginTop: 5,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
});
