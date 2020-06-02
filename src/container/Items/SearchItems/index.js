/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';
import * as string from '../../../resources/string';
import * as booksAPI from '../../../service/API/BooksAPI';
const SearchBar = props => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [itemsInfo, setItemsInfo] = useState('');

  useEffect(() => {
    setLoading(true);
    getBooks();
  }, [getBooks, input]);

  useEffect(() => {
    setLoading(false);
  }, [itemsInfo]);

  const getBooks = async () => {
    try {
      const responseJson = await booksAPI.getAllEbooks(input);
      if (responseJson.items !== undefined) {
        const volumeItem = setItemsVolumeInfo(responseJson.items);
        setItemsInfo(volumeItem);
        props.callBackSearchResult(volumeItem);
      } else {
        props.callBackSearchResult([]);
        console.log(string.API_ERROR);
      }
    } catch (error) {
      console.log(error);
      Alert.alert(error.toString());
    }
  };

  const setItemsVolumeInfo = allItems => {
    return allItems.map(itemInfo => {
      return itemInfo.volumeInfo;
    });
  };

  const onSearchStoreItems = textInput => {
    setInput(textInput);
  };

  return (
    <>
      <SafeAreaView style={styles.toolbar}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btnBack}>
            <Image
              source={
                Platform.OS === 'android'
                  ? require('../../../resources/assets/back.png')
                  : require('../../../resources/assets/iosback.png')
              }
              style={styles.imageNewFeed}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={{flex: 0.9}}>
            <View style={styles.inputView}>
              <View style={styles.inputSearch}>
                <View style={styles.searchArea}>
                  <Image
                    source={require('../../../resources/assets/iconsearch.png')}
                    style={styles.imageNewFeed}
                    resizeMode="contain"
                  />
                  <TextInput
                    style={{fontWeight: 'bold', color: 'black'}}
                    placeholder={'Book title'}
                    placeholderTextColor="gray"
                    onChangeText={onSearchStoreItems}
                    value={input}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ActivityIndicator animating={loading} />
    </>
  );
};

export default SearchBar;
