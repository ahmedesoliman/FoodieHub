import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from '../components/ResultDetail';
import SearchBar from '../components/SearchBar';

const ListScreen = ({ navigation }) => {

    // hook for controlling the search term
    const [term, setTerm] = useState('');

    // get the JSON file which temporarily store the truck information 
    const results = require('../../assets/data/foodTrucks.json');

    return (
        <View style={styles.background}>

            <SearchBar
                term={term}
                onTermChange={setTerm}
            />

            <FlatList
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', { result: item })}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        height: 3000,
        flex: 1
    },
    flatList: {
        marginTop: 0
    }
});

export default withNavigation(ListScreen);