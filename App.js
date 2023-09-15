import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import { StatusBar } from "expo-status-bar";

import Login from "./src/Login.js";

import Registration from "./src/Registration.js";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserLists from "./src/UserLists.js";

import React, { useState } from "react";

import UsersDetail from "./src/UsersDetail.js";

import { SignupProvider } from "./src/SignupContext.js";

const Stack = createNativeStackNavigator();

const App = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  return (
    <>
      <SignupProvider>
        <StatusBar style="auto" />

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login">
              {(props) => (
                <Login {...props} registeredUsers={registeredUsers} />
              )}
            </Stack.Screen>

            <Stack.Screen name="Registration">
              {(props) => (
                <Registration
                  {...props}
                  setRegisteredUsers={setRegisteredUsers}
                />
              )}
            </Stack.Screen>

            {/* <Stack.Screen name="UsersList">

          {(props) => <UsersList {...props} users={users} />}

          </Stack.Screen>

 

          <Stack.Screen name="UsersDetail" component={UsersDetail} /> */}

            <Stack.Screen name="UserLists" component={UserLists} />

            <Stack.Screen name="UsersDetail" component={UsersDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SignupProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
