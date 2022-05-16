import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';

const Dishes = ({ result, subtitleStyle }) => {

    return (
        <View>
            <Text style={subtitleStyle}>Popular Dishes</Text>
            <View style={styles.container}>
                <FlatList
                    style={styles.flatlist}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image style={styles.dishImage} source={{ uri: item }} />
                    }}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10
    },
    dishImage: {
        width: 260,
        height: 150,
        borderRadius: 4,
        marginLeft: 5
    }
});

export default Dishes;