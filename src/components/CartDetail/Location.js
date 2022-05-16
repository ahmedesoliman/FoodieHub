import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';

const Location = ({ result, subtitleStyle }) => {

    return (
        <View>
            <Text style={subtitleStyle}>Location</Text>
            <View style={styles.container}>
                <Image style={styles.mapImage} source={{ uri: "https://developers.google.com/maps/images/landing/hero_geocoding_api_480.png" }} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{result.location.address}</Text>
                    <Text style={styles.text}>
                        {result.location.city}, { }
                        {result.location.state}, { }
                        {result.location.country}, { }
                        {result.location.zip_code}
                    </Text>
                </View>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingVertical: Dimensions.get("window").width * 0.027
    },
    mapImage: {
        resizeMode: 'stretch',
        alignSelf: 'center',
        width: Dimensions.get("window").width,
        height: 200,
    },
    textContainer: {
        marginTop: 10,
        paddingHorizontal: Dimensions.get("window").width * 0.015
    },
    text: {
        fontStyle: 'italic'
    }
});

export default Location;