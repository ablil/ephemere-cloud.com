import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Loading = ({ text }) => {
  return (
    <View>
      <Text>{text || "loading"} ...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
