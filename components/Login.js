import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import { ApolloProvider } from "react-apollo";
import client from "../data/services/client";
import UserLoginMutation from "../data/mutations/login";

export default class LoginScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ApolloProvider client={client} style={loginScreenStyles.container}>
        <Login navigation={navigate} />
        <View />
      </ApolloProvider>
    );
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  submitCreds = async (emailEntered, passwordEntered) => {
    client
      .mutate({
        variables: { email: emailEntered, password: passwordEntered },
        mutation: UserLoginMutation
      })
      .then(async ({ data }) => {
        const token = data.login.token;
        await AsyncStorage.setItem("@mulligan:access_token", token);
        this.props.navigation("Home");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={loginStyles.container}>
        <View style={loginStyles.loginContainer}>
          <Text style={loginStyles.loginTitle}>Mulligan</Text>
        </View>
        <View style={loginStyles.formContainer}>
          <LoginForm getCreds={(e, p) => this.submitCreds(e, p)} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    this.props.getCreds(this.email, this.password);
  };

  render() {
    return (
      <>
        <TextInput
          style={loginStyles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={input => (this.email = input)}
          placeholder="Email or Mobile Num"
          placeholderTextColor="rgba(225,225,225,0.7)"
        />

        <TextInput
          style={loginStyles.input}
          returnKeyType="go"
          onChangeText={input => (this.password = input)}
          placeholder="Password"
          placeholderTextColor="rgba(225,225,225,0.7)"
          secureTextEntry
        />

        <TouchableOpacity
          style={loginStyles.buttonContainer}
          onPress={this.handleSubmit}
        >
          <Text style={loginStyles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </>
    );
  }
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50"
  },
  loginContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  loginTitle: {
    fontSize: 40,
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  },
  input: {
    height: 40,
    backgroundColor: "rgba(225,225,225,0.2)",
    marginBottom: 10,
    padding: 10,
    color: "#fff"
  },
  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }
});

const loginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
