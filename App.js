import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import Repo from './components/Repo';

export default class App extends React.Component {
  state = {
    repos: [
      {
        id: 1,
        thumbnail: '',
        title: 'react-native app',
        author: 'caiogodoi',
      },
      {
        id: 2,
        thumbnail: '',
        title: 'react app',
        author: 'caio',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>React Native App</Text>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>
          {this.state.repos.map(repo => <Repo key={repo.id} />)};
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: Platform.OS === 'ios' ? 70 : 50,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  repoList: {
    padding: 20,
  },
});
