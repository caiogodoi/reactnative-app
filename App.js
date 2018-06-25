import 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Repo from './components/Repo';
import NewRepoModal from './components/NewRepoModal';

export default class App extends React.Component {
  state = {
    visibility: false,
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

  openModal = () => {
    this.setState({ visibility: true });
  };

  onCancel = () => {
    this.setState({ visibility: false });
  };

  onSubmit = async modalText => {
    const call = await fetch(`http://api.github.com/repos/${modalText}`);
    const response = await call.json();

    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login,
    };

    this.setState({
      visibility: false,
      repos: [...this.state.repos, repository],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>React Native App</Text>
          <TouchableOpacity onPress={this.openModal}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>
          {this.state.repos.map(repo => <Repo key={repo.id} data={repo} />)};
        </ScrollView>
        <NewRepoModal
          onCancel={this.onCancel}
          onSubmit={this.onSubmit}
          visible={this.state.visibility}
        />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  repoList: {
    padding: 20,
  },
});
