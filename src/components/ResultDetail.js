import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

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
        marginBottom: 15,
        alignSelf: 'center'
    },
    image: {
        width: 320,
        height: 150,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    },
    subtitle: {
        width: 320
    }
});

export default ResultDetail;