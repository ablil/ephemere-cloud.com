import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const IdentifierModal = ({ onSuccess, onFailure }) => {
  const [identifier, setIdentifier] = useState("");

  const search = () => {
    console.log("should look for identifier");
  };

  return (
    <View>
      <Text>link or identifier</Text>
      <TextInput
        value={identifier}
        onChange={(evt) => setIdentifier(evt.target.value)}
      />
      <Text onPress={search}>search</Text>
    </View>
  );
};

export default IdentifierModal;

const styles = StyleSheet.create({});
