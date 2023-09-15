import React from "react";

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "1",

    title: "Aman",

    email: "aman@hcl.com",
  },

  {
    id: "2",

    title: "Mohammad Aarif",

    email: "mohammad.aarif@hcl.com",
  },

  {
    id: "3",

    title: "Ravish Kumar",

    email: "ravish.kumar@hcl.com",
  },

  {
    id: "4",

    title: "ravish",

    email: "ravish@hcl.com",
  },

  {
    id: "5",

    title: "Ritesh",

    email: "ritesh@hcl.com",
  },

  {
    id: "6",

    title: "Sunil Kumar",

    email: "Sunil-k@hcl.com",
  },

  {
    id: "7",

    title: "Kunal Patil",

    email: "kunal_patil@hcl.com",
  },

  {
    id: "8",

    title: "Abhiraj Roushan",

    email: "Abhiraj_roushan@hcl.com",
  },

  {
    id: "9",

    title: "Himanshu Raj",

    email: "Himanshu@hcl.com",
  },
];

const Item = ({ title, email, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.border}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.email}>{email}</Text>
    </View>

    <View>
      <Text style={styles.specialText}> &gt; </Text>
    </View>
  </TouchableOpacity>
);

const UserLists = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item email={item.email} title={item.title} onPress={() => {}} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topic}>User Lists</Text>

        <Button
          title="Logout"
          color="#808080"
          onPress={() => navigation.navigate("Login")}
        />
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            email={item.email}
            onPress={() => {
              navigation.navigate("UsersDetail", { item });
            }}
          />
        )}
        // renderItem={({item})=>(<View><Text>{item.title}</Text></View>)}

        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff8dc",

    marginTop: StatusBar.currentHeight || 0,
  },

  topic: {
    textAlign: "center",

    fontWeight: "bold",

    fontSize: 20,

    fontStyle: "italic",

    marginBottom: 10,
  },

  item: {
    // backgroundColor: '#f9c2ff',

    padding: 2,

    marginVertical: 8,

    marginHorizontal: 26,
  },

  title: {
    fontSize: 20,
  },

  email: {
    fontSize: 15,

    marginTop: 10,

    marginBottom: 10,
  },

  border: {
    borderBottomWidth: 2,

    borderBottomColor: "blue",

    margin: 10,

    flexDirection: "row",

    justifyContent: "space-between",
  },

  header: {
    flexDirection: "row",

    justifyContent: "space-between",

    marginHorizontal: 30,
  },

  special: {
    flexDirection: "row",
  },

  specialText: {
    fontSize: 30,

    fontWeight: "bold",

    marginTop: 21,
  },
});

export default UserLists;
