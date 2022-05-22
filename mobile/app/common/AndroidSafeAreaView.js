import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import colors from "./colors";

function AndroidSafeAreaView({ children }) {
  return <View style={style}>{children}</View>;
}

export default AndroidSafeAreaView;

const style = StyleSheet.create({
  flex: 1,
  backgroundColor: colors.black,
  // paddingTop: 20,
  paddingTop: Platform.OS === "android" ? 25 : 0,
});
