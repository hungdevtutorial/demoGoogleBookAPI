import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  Alert,
} from 'react-native';
import {textView} from '../../../ui/textView';
import {buttonStyle} from '../../../ui/button';
import * as string from '../../../resources/string';
const DetailItems = props => {
  const {title, authors, pageCount, previewLink} = props.item;
  const setVisible = () => {
    props.dissmiss();
  };

  const onOpenLinkToRead = () => {
    Linking.canOpenURL(previewLink).then(supported => {
      if (supported) {
        Linking.openURL(previewLink);
      } else {
        Alert.Alert(
          "Don't know how to open " +
            previewLink +
            ". Maybe browser don't support",
        );
      }
    });
  };

  return (
    <View>
      <Modal
        transparent={true}
        visible={props.isVisible}
        onRequestClose={setVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.row}>
              <View style={styles.halfColumn}>
                <Image
                  style={styles.imageNewFeed}
                  source={
                    props.item.imageLinks !== undefined
                      ? {uri: props.item.imageLinks.thumbnail}
                      : require('../../../resources/assets/chooseimage.jpg')
                  }
                  resizeMode="contain"
                />
              </View>
              <View style={styles.halfColumn}>
                <Text style={textView.txtinfoSecond}>Title: {title}</Text>
                <Text style={textView.txtinfoSecond}>
                  Author: {authors !== undefined ? authors : string.NO_INFO}
                </Text>
                <Text style={textView.txtinfoSecond}>
                  Page: {pageCount !== undefined ? pageCount : string.NO_INFO}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={buttonStyle.btnAccept}
              onPress={onOpenLinkToRead}>
              <Text style={styles.textStyle}>Read Online</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={buttonStyle.btnAccept}
              onPress={setVisible}>
              <Text style={styles.textStyle}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  row: {
    flexDirection: 'row',
  },
  halfColumn: {
    flexDirection: 'column',
    flex: 0.5,
  },
  modalView: {
    padding: 10,
    margin: 20,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageNewFeed: {
    width: 130,
    height: 150,
    marginTop: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DetailItems;
