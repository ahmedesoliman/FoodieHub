import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator} from 'react-native';
import firebase from '../../database/firebase';

const ForgetPassword = () => {
  
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

const resetPassword = ({navigation}) => {
    if(email === '') {
      Alert.alert('Enter email to reset password!')
    } else {
      setIsLoading(true)
      firebase.auth().sendPasswordResetEmail(email)
      .then((res) => {
        console.log(res)
        setEmail("");
        setIsLoading(false);
        Alert.alert("reset email sent to " + email)
        navigation.navigate("login")
      })
      .catch(error => console.log(error))      
    }
  }
  if(isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}> 
      <Text style={styles.title}>Enter email to reset Password</Text>
      <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />   
        <Button
          color="#ebc034"
          title="Reset Password"
          onPress={resetPassword}
        />                      
      </View>
    );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
});

export default ForgetPassword;


// reference 
// https://stackoverflow.com/questions/54515444/how-to-reset-firebase-auth-password-in-react-native