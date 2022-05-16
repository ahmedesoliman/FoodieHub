import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetail from '../components/ResultDetail';
import SearchBar from '../components/SearchBar';
import { Dimensions } from 'react-native';

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

ListScreen.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
            <TouchableOpacity style={styles.logOutSection} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.logOutText}>LogOut</Text>
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    background: {
        height: 3000,
        flex: 1
    },
    flatList: {
        marginTop: 0,
    },
    logOutSection: {
        marginLeft: Dimensions.get("window").width * 0.04,
    },
    logOutText: {
        fontSize: 16,
        color: '#f6b842'
    }
});

export default ListScreen;