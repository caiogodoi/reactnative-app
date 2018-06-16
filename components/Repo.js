import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class Repo extends Component {
  render() {
    return (
      <View style={styles.repo}>
        <Image style={styles.repoImage} source={{ uri: '' }} />
        <View style={styles.repoInfo}>
          <Text style={styles.repoTitle}>caio.godoi</Text>
          <Text style={styles.repoAuthor}>caiogodoi</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  repo: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  repoImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  repoInfo: {
    marginLeft: 10,
  },

  repoTitle: {
    fontWeight: 'bold',
    color: '#333',
  },

  repoAuthor: {
    fontSize: 12,
    color: '#999',
  },
});
