import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

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
        padding: Dimensions.get("window").width * 0.027
    },
});

export default Location;