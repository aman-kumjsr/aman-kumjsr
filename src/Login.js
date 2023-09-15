import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";

import React, { useState } from "react";

const Login = ({ navigation, registeredUsers }) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check if the entered username and password match registered data

    const user = registeredUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setLoggedIn(true);

      // Perform actions after successful login

      navigation.navigate("UserLists");
    } else {
      Alert.alert(
        "Password",

        "Wrong Password",

        [
          {
            text: "Cancel",
          },

          {
            text: "OK",
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,

          color: "black",

          fontWeight: "bold",

          marginBottom: 20,

          justifyContent: "center",

          alignItems: "center",

          position: "absolute",

          top: 15,

          padding: 25,
        }}
      >
        Login
      </Text>

      <View style={{ marginBottom: 15 }}>
        <TextInput
          placeholder="UserName"
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>

      <View style={{ marginBottom: 15 }}>
        <Button title="Login NOW" onPress={handleLogin} color={"#b8860b"} />
      </View>

      <View>
        <Button
          title="Don't Have Account - Signup"
          onPress={() => navigation.navigate("Registration")}
          color={"#b8860b"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff8dc",

    flexDirection: "column",

    flex: 1,

    alignItems: "center",

    justifyContent: "center",

    paddingBottom: 5,
  },

  input: {
    padding: 15,

    backgroundColor: "ghostwhite",

    borderColor: "#deb887",

    borderRadius: 10,

    borderWidth: 2,

    position: "relative",

    top: 15,

    width: 200,

    height: 50,

    margin: 15,

    justifyContent: "space-around",
  },
});

export default Login;
