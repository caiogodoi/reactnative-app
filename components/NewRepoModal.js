import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { AddAction } from '../actions'

class NewRepoModal extends Component {
  state = {
    modalText: '',
  };

  onChangeText = (modalText) => this.setState({ modalText });

  render() {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.boxContainer}>
          <Text style={styles.boxTitle}>Adicionar repositório</Text>
          <TextInput
            autoFocus
            autoCapitalize="none"
            style={styles.boxInput}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="organização/repositório"
            value={this.state.modalText}
            onChangeText={this.onChangeText}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={Actions.pop}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.submitButton]}
              onPress={() => this.props.AddItem(this.state.modalText)}
            >
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.AddRepo,
  };
};

const mapDispatchToProps = dispatch => ({
  addItemAction: modalText => dispatch(AddRepoAction(modalText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRepoModal);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    width: 280,
  },

  boxTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  boxInput: {
    alignSelf: 'stretch',
    marginTop: 10,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    height: 40,
    borderRadius: 3,
  },

  buttonContainer: {
    marginTop: 10,
    height: 40,
    flexDirection: 'row',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },

  cancelButton: {
    backgroundColor: '#E25F5F',
    marginRight: 5,
  },

  submitButton: {
    backgroundColor: '#70BD85',
    marginLeft: 5,
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 12,
  },
});
