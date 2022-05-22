import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import colors from "../common/colors";

const tabs = {
  FILES: "files",
  METADATA: "metadata",
};

const files = [
  {
    filename: "filename.jpeg",
    size: 23,
  },
  {
    filename: "anda ndw one.jpeg",
    size: 37,
  },
  {
    filename: "anotherfilename.jpeg",
    size: 5,
  },
];

function UploadScreen({ navigation }) {
  const [tab, setTab] = useState(tabs.FILES);
  const [data, setData] = useState({
    password: "",
    description: "",
    timer: "15",
  });

  const toggleTab = () => {
    setTab((old) => (old === tabs.FILES ? tabs.METADATA : tabs.FILES));
  };

  const onUpload = () => {
    console.log("should upload right now");
  };

  const removeFile = (filename) => {
    console.log("should remove files");
  };

  return (
    <LinearGradient
      colors={[colors.secondary, colors.primary]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 1, y: 0.7 }}
      style={style.container}
    >
      <View style={style.goback}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>

      {tab === tabs.FILES && (
        <>
          <View style={style.total}>
            <Text>Total uploaded size</Text>
            <Text>
              {files
                .map((file) => file.size)
                .reduce((acc, cur) => acc + cur, 0)}{" "}
              MB
            </Text>
            <View>{/* rounded cercle here */}</View>
          </View>

          <FlatList
            style={style.filescontainer}
            data={files}
            keyExtractor={(file) => file.filename}
            renderItem={({ item }) => (
              <View style={style.file}>
                <Text>{item.filename}</Text>
                <Text style={style.filesize}>{item.size} Mb</Text>
                <Ionicons
                  style={style.remove}
                  name="remove"
                  size={24}
                  color="red"
                />
                {/* scroll to remove  */}
                {/* <Text onPress={() => removeFile(item.filename)}>remove</Text> */}
              </View>
            )}
          />
        </>
      )}

      {tab === tabs.METADATA && (
        <>
          <View style={style.total}>
            <Text>the file(s) will expires on</Text>
            <Text>{new Date().toLocaleDateString()}</Text>
            <View>{/* rounded cercle here */}</View>
          </View>
          <View style={style.filescontainer}>
            <View>
              <Text>protect with a password</Text>
              <TextInput
                value={data.password}
                placeholder="********"
                onChange={(evt) =>
                  setData((old) => ({ ...old, password: evt.target.value }))
                }
              />
            </View>
            <View>
              <Text>timer</Text>
              <TextInput
                value={data.timer}
                placeholder="Small description for the receiver"
                onChange={(evt) =>
                  setData((old) => ({ ...old, timer: evt.target.value }))
                }
              />
            </View>
            <View>
              <Text>description</Text>
              <TextInput
                value={data.description}
                onChange={(evt) =>
                  setData((old) => ({ ...old, description: evt.target.value }))
                }
              />
            </View>
          </View>
        </>
      )}

      <View style={style.footer}>
        <Text onPress={toggleTab} style={style.tab}>
          files
        </Text>
        <Ionicons
          style={style.icon}
          name="cloud-upload-outline"
          size={44}
          color="black"
        />
        <Text onPress={toggleTab} style={style.tab}>
          metadata
        </Text>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: { flex: 1 },
  tabs: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  tab: {
    paddingHorizontal: 20,
    width: "30%",
    textAlign: "center",
  },
  total: {
    textAlign: "center",
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 20,
    marginHorizontal: "5%",
    width: "90%",
  },
  file: {
    padding: 10,
  },
  goback: {
    width: "100%",
    padding: 20,
    paddingLeft: "5%",
  },
  filescontainer: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    margin: "5%",
  },
  remove: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  filesize: {
    color: colors.gray,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    marginHorizontal: "5%",
    marginTop: "auto",
    marginBottom: 10,
  },
});

export default UploadScreen;
