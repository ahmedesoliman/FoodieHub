// components/signup.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator , TouchableOpacity} from 'react-native';
import firebase from '../../database/firebase';

const Register = ({navigation}) => {
  
    const [displayName, setDisplayName] = useState("");
    const [userName, setUserName] = useState("");
    const [dateofBirth, setDOB] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setComfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // const handleDisplayNameInput = e => {
    //     setDisplayName(e.target.value);
    // }

    // const handleEmailInput = e => {
    //     setEmail(e.target.value);
    // }

    // const handlePasswordInput = e => {
    //     setPassword(e.target.value);
    // }

    // const handleConfirmPasswordInput = e => {
    //     setComfirmPassword(e.target.value)
    // }

    // const handleDateofBirthInput = e => {
    //     setDOB(e.target.value)
    // }

    // const handleUserNameInput = e => {
    //     setUserName(e.target.value)
    // }


const registerUser = () => {
    if(email === '' && password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      setIsLoading(true)
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((res) => {
        res.user.updateProfile(
            (displayName) => setDisplayName(displayName))
        console.log('User registered successfully!')
        setDisplayName("");
        setEmail("");
        setPassword("");
        setDOB("");
        setComfirmPassword("");
        setUserName("");
        setIsLoading(false);
        navigation.navigate('login')
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
      <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Full Name"
          value={displayName}
          onChangeText={(displayName) => setDisplayName(displayName)}
        />    
        <TextInput
          style={styles.inputStyle}
          placeholder="Date of Birth (mm-dd-yyyy)"
          value={dateofBirth}
          onChangeText={(dateofBirth) => setDOB(dateofBirth)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="UserName"
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          maxLength={15}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Retype Password"
          value={confirmPassword}
          onChangeText={(confirmPassword) => setComfirmPassword(confirmPassword)}
          maxLength={15}
          secureTextEntry={true}
        />     
        <Button
          color="#ebc034"
          title="Register"
          onPress={registerUser}
        />
        < TouchableOpacity
          style={styles.loginText}
          onPress={() => navigation.navigate('login')}>
          <Text>Already Registered? Click here to login </Text>
        </TouchableOpacity>                          
      </View>
    );
}


const styles = StyleSheet.create({
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
  loginText: {
    color: '#000000',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

export default Register;


// Reference 

// https://www.positronx.io/react-native-firebase-login-and-user-registration-tutorial/

// https://medium.com/@chrisbianca/getting-started-with-firebase-authentication-on-react-native-a1ed3d2d6d91