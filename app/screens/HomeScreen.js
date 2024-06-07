import { StyleSheet, Text, View } from "react-native";

import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

export default function HomeScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("useEffect --- ");
    // setData("Hello");
    fetchData();
  }, []);

  async function fetchData() {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  console.log("Data : ", data);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home ---- !</Text>
      {data && <Text>{data}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({});
