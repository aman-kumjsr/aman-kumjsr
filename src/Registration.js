import React, { useState } from "react";

import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const Registration = ({ navigation, setRegisteredUsers }) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Save user data to state or a database

    const newUser = { username, password };

    setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);

    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 20,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 15,
          padding: 25,
        }}
      >
        Signup
      </Text>

      <View style={{ marginBottom: 15 }}>
        <TextInput
          placeholder="UserName"
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <TextInput placeholder="Email" style={styles.input} />

        <TextInput placeholder="FirstName" style={styles.input} />

        <TextInput placeholder="LastName" style={styles.input} />
      </View>

      <View style={{ marginBottom: 15 }}>
        <Button title="Upload Profile Picture" color={"#b8860b"} />
      </View>

      <View>
        <Button title="Signup" onPress={handleRegister} color={"#b8860b"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,

    flexDirection: "column",

    flex: 1,

    backgroundColor: "#fff8dc",

    alignItems: "center",

    justifyContent: "center",

    paddingBottom: 5,
  },
  input: {
    padding: 15,

    backgroundColor: "ghostwhite",

    borderColor: "#deb887",

    borderWidth: 2,

    borderRadius: 10,

    position: "relative",

    width: 200,

    height: 50,

    margin: 5,

    justifyContent: "space-around",
  },
});

export default Registration;
