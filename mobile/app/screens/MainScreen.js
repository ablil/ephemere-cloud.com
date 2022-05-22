import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../common/colors";

function MainScreen({ navigation }) {
  return (
    <LinearGradient
      colors={[colors.secondary, colors.primary]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 1, y: 0.7 }}
      style={style.container}
    >
      <View style={style.header}>
        <Text style={style.headertext}>e-clourd</Text>
        <Text style={style.headertext}>Simple, fast and secure</Text>
      </View>

      <View style={style.goback}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>

      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate("upload")}
      >
        <Text style={style.text}>upload</Text>
        <Ionicons
          style={style.icon}
          name="cloud-upload-outline"
          size={44}
          color="black"
        />
        <Text style={style.description}>Share files with the world</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button}>
        <Text style={style.text}>download</Text>
        <Ionicons
          style={style.icon}
          name="cloud-download-outline"
          size={44}
          color="black"
        />
        <Text style={style.description}>access shared files</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    position: "absolute",
    width: "100%",
    top: 20,
  },
  headertext: {
    textTransform: "capitalize",
    fontFamily: "Fredoka",
    textAlign: "center",
    color: colors.white,
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    width: 170,
    height: 170,
    marginHorizontal: "auto",
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 30,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: "Fredoka",
  },
  icon: {
    marginVertical: 10,
  },
  description: {
    color: colors.gray,
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: "Fredoka",
  },
});

export default MainScreen;
