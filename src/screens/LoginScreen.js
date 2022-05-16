import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert, Image, ActivityIndicator } from 'react-native';

import firebase from '../database/firebase';

var logo = require('../../assets/images/StreetFood.png');


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const showAlert = () => {            //To test the button working
  //   Alert.alert(
  //     "you need to .." 
  //   )
  // };

  const userLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      setIsLoading(true)
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res)
          console.log('User logged-in successfully!')
          setEmail("")
          setPassword("")
          setIsLoading(false)
          navigation.navigate('List')
        })
        .catch(error => {
          console.log(error)
          setIsLoading(false)
          Alert.alert("wrong email or password")
          navigation.navigate('Login')
        })
    }
  }
  if (isLoading) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity style={styles.forgot_button} onPress={() => navigation.navigate("ForgetPassword")}>
          <Text >Forgot Password?     </Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.new_user} onPress={() => navigation.navigate("Register")}>
          <Text >New User?</Text>
        </TouchableOpacity>
      </View>


      <Button
        onPress={userLogin}
        title="Login"
        color="#e6cd7e"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 5,
    width: 220,
    height: 170
  },

  inputView: {
    backgroundColor: "#e6cd7e",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
  },

  new_user: {
    height: 30,
    marginBottom: 10,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#ebc034",
  },
});

export default LoginScreen;
