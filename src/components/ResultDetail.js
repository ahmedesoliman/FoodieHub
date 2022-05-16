import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const ResultDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <View style={styles.subtitle}>
                <Text style={styles.name}>{result.cart_name}</Text>
                <Text>{result.rating} star, {result.review_count} Reviews</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginBottom: 7,
        padding: 10,
        width: Dimensions.get("window").width,
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: Dimensions.get("window").width * 0.92,
        height: 150,
        marginBottom: 5,
        alignSelf: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    },
    subtitle: {
        width: Dimensions.get("window").width * 0.92,
        alignSelf: 'center',
    }
});

export default ResultDetail;