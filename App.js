import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>React Native App</Text>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
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
});
