import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});
// Components
import Login from './components/Login'

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client} style={styles.container}>
        <Login username="" password=""/>
        <View></View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
