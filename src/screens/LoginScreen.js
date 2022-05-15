import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert, Image} from 'react-native';

var logo = require('../../assets/images/StreetFood.png');


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const showAlert = () => {            //To test the button working
    //   Alert.alert(
    //     "you need to .." 
    //   )
    // };

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
        
        <View style={{flexDirection:"row", justifyContent: "space-evenly"}}>
        <TouchableOpacity style={styles.forgot_button}>
            <Text >Forgot Password?     </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.new_user}>
            <Text >New User?</Text>
        </TouchableOpacity>
        </View>


        <Button
        onPress={() => navigation.navigate("list") }
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
      width:220,
      height:170
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
