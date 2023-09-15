import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const UsersDetail = ({ route }) => {
  const { title, email } = route.params.item;

  return (
    <View style={styles.container}>
      <Image source={require("../assets/React-logo.jpg")} style={styles.img} />
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.email}>{email}</Text>

      {/* Add more user details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8dc",
    justifyContent: "center",

    alignItems: "center",
  },

  title: {
    fontSize: 24,

    fontWeight: "bold",
  },

  email: {
    fontSize: 16,

    marginTop: 10,
  },
  img: {
    width: 150,
    height: 150,
  },

  // Add more styles as needed
});

export default UsersDetail;
