import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import client from './data/services/client'

// Components
import Login from './components/Login'

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client} style={styles.container}>
        <Login />
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
