import React from 'react';
import {View, SafeAreaView, StyleSheet, FlatList, Image} from 'react-native';
import { TextInput } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import faker from 'faker'

import { PRIMARY } from '../utils/colors';

const Search = () => {
    const DATA = [];
    for(i=0; i<50; i++){
        DATA.push(
            {
                id: i,
                image: faker.image.avatar(), 
            }
        )
    }
    return (
        <SafeAreaView>
            <View style={styles.textInputContainer}>
                <TextInput
                    label="Search"
                    mode="outlined"
                    outlineColor= "transparent"
                    theme={{colors: {primary: {PRIMARY}}}}
                    style={styles.textInput}
                    left={
                      <TextInput.Icon
                        name={() => <AntDesign name={'search1'} size={20} color={PRIMARY} />}
                      />
                    }
                />
            </View>

            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                return (
                        <Image source={{uri: item.image}} />
                );
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,  
        elevation: 5
    },
    textInput: {
    }
})

export default Search;