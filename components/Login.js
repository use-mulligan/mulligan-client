import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import client from '../data/services/client'
import UserLoginMutation from '../data/mutations/login'


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Hey",
      password: "Yo"
    }
  }

  submitCreds = (emailEntered, passwordEntered) => {
    console.log("Submitting creds...")

    client.mutate({
      variables: { email: emailEntered, password: passwordEntered },
      mutation: UserLoginMutation,
    }).then(result => { console.log(JSON.stringify(result)) })
    .catch(error => { console.log(error) });
  }

  render() {
    const { email, password } = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginTitle}>Mulligan</Text>
          <Text>{email} {password}</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm getCreds={(e, p) => this.submitCreds(e, p)}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

class LoginForm extends React.Component  {
  constructor(props) {
    super(props)
  }

  handleSubmit = () => {
    this.props.getCreds(this.email, this.password);
  }

  render() {
    return (
      <>
        <TextInput style = {styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType='email-address'
          returnKeyType="next"
          onChangeText={(input)=> this.email = input}
          placeholder='Email or Mobile Num'
          placeholderTextColor='rgba(225,225,225,0.7)'/>

        <TextInput style = {styles.input}
          returnKeyType="go"
          onChangeText={(input)=> this.password = input}
          placeholder='Password'
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry />

        <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </>
    )

  }
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
