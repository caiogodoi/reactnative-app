import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class NewRepoModal extends Component {
  render() {
    return (
      <Modal animationType="fade" transparent={true} visible={true}>
        <View style={styles.modalContainer}>
          <View style={styles.boxContainer} />
          <Text style={styles.boxTitle}>Adicionar repositório</Text>
          <TextInput
            autoFocus
            autoCapitalize="none"
            style={styles.boxInput}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="organização/repositório"
          />

          <View style={style.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => {}}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
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
    height: 30,
  },
});
