import React from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../common/colors";
function GetStarted({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/getstarted.jpg")}
      resizeMod="center"
      style={style.container}
    >
      <View style={style.subcontainer}>
        <Text style={style.title}>Ephemre cloud</Text>
        <Text style={style.header}>volatile cloud drive</Text>
        <Text style={style.description}>
          a place where you can share files with people, temporarly, securely
          and automatically deleted
        </Text>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate("main")}
        >
          <Text style={style.text}>get started</Text>
          <MaterialIcons
            style={style.icon}
            name="keyboard-arrow-right"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0,0,0, .7)",
  },
  title: {
    fontSize: 60,
    // textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Fredoka",
    color: colors.white,
  },
  header: {
    marginTop: "10%",
    fontSize: 40,
    color: colors.white,
    fontFamily: "Fredoka",
  },
  description: {
    marginTop: "10%",
    fontSize: 40,
    fontSize: 20,
    color: colors.white,
  },
  button: {
    marginTop: "auto",
    marginBottom: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 20,
    color: colors.white,
    textTransform: "capitalize",
  },
  icon: {
    color: colors.white,
  },
});

export default GetStarted;
