import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const SearchBar = ({ term, onTermChange }) => {
    return (
        <View style={styles.container}>
            <View style={styles.backgroundStyle}>
                <Feather name='search' style={styles.iconStyle} />
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.inputStyle}
                    placeholder='Search'
                    value={term}
                    onChangeText={onTermChange}
                />
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    backgroundStyle: {
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#F0EEEE',
        height: 50,
        width: Dimensions.get("window").width * 0.92,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 10
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
