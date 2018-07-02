import 'expo';
import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';
import Repo from './Repo';

class RepoList extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>React Native App</Text>
          <TouchableOpacity onPress={Actions.addrepo}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>
          {this.props.repos.map((repo, key) => <Repo key={key} data={repo} />)};
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos,
  };
};

export default connect(mapStateToProps)(RepoList);

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
