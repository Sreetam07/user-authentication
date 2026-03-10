import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { styles } from "./index.style";

const HomeScreen = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <Text>Name: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>

      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
