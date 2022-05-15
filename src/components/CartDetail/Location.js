import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const Location = ({ result, subtitleStyle }) => {

    return (
        <View>
            <Text style={subtitleStyle}>Location</Text>
            <View style={styles.container}>
                <Text>{result.location.address}</Text>
                <Text>
                    {result.location.city}, { }
                    {result.location.state}, { }
                    {result.location.country}, { }
                    {result.location.zip_code}
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10
    },
    menuImage: {
        width: 260,
        height: 400,
        borderRadius: 4,
        marginLeft: 5
    }
});

export default Location;