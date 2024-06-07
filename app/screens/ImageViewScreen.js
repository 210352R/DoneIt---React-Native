import React from "react";
//import useState
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function ImageViewScreen({ route, navigation }) {
  const { name } = route.params;
  // create count useState variable
  const [count, setCount] = useState(0);

  //create method for increment count by 1
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.imageContainer}>
      <TouchableWithoutFeedback onPress={incrementCount}>
        <View style={styles.closeButton}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              alignItems: "center",
              marginTop: 15,
              justifyContent: "center",
            }}
          >
            +
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/chair.jpg")}
      />

      <View style={styles.topRight}>
        <Text style={{ color: "white" }}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 25,
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 1,
  },
  topRight: {
    position: "absolute",
    top: 20,
    right: 10,
    zIndex: 1,
  },
});
