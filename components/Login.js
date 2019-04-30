import React, { useState } from 'react'
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'

const Login = () => {
  const [email, setEmail] = React.useState(0)
  const [password, setPassword] = React.useState(1)

  const submitCreds = (emailEntered, passwordEntered) => {
    setEmail(emailEntered);
    setPassword(passwordEntered);
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Mulligan</Text>
        <Text>{email} {password}</Text>
      </View>
      <View style={styles.formContainer}>
        <LoginForm onClick={submitCreds}/>
      </View>
    </KeyboardAvoidingView>
  );
}

const LoginForm = ({onClick}) => {

  handleSubmit = (email, password) => {
    onClick.submitCreds(email, password)
  }

  return (
    <>
      <TextInput style = {styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType='email-address'
        returnKeyType="next"
        ref={(input) => this.emailOrPhoneInput = input}
        placeholder='Email or Mobile Num'
        placeholderTextColor='rgba(225,225,225,0.7)'/>

      <TextInput style = {styles.input}
        returnKeyType="go"
        ref={(input)=> this.passwordInput = input}
        placeholder='Password'
        placeholderTextColor='rgba(225,225,225,0.7)'
        secureTextEntry />

      <TouchableOpacity style={styles.buttonContainer} onPress={() => handleSubmit(emailOrPhoneInput, passwordInput)}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#2c3e50',
  },
  loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  },
  loginTitle: {
      fontSize: 40,
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  buttonContainer:{
      backgroundColor: '#2980b6',
      paddingVertical: 15
  },
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  }
});

export default Login