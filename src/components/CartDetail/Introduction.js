import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const Introduction = ({ result }) => {

    return (
        <View style={styles.introduction}>
            <Text style={styles.cartName}>{result.cart_name}</Text>
            <Text>
                <Text style={styles.ratingGraph}>{graphicRating(result.rating)}</Text>
                <Text style={styles.remainGraph}>{graphicRemainRating(result.rating)} </Text>
                <Text>{result.review_count} Reviews</Text>
            </Text>
            <Text>
                <Text>{result.price}</Text>
                <Text style={styles.remainGraph}>{graphicRemainPrice(result.price)} </Text>
                <Text>• {result.categories.join(', ')}</Text>
            </Text>
        </View>
    )
};

// function returns the graphic representation of rating 
// (eg. rating = 4.3, return graph of 4 stars )
function graphicRating(rating) {

    if (rating === 5)
        return "★★★★★";
    else if (rating >= 4)
        return "★★★★";
    else if (rating >= 3)
        return "★★★";
    else if (rating >= 2)
        return "★★";
    else if (raing >= 1)
        return "★";
    else
        return "";
};

// function returns the graphic representation of remining rating
// 5 stars in total => so, if rating = 4.3, return an empty star
function graphicRemainRating(rating) {
    if (rating === 5)
        return "";
    else if (rating >= 4)
        return "☆";
    else if (rating >= 3)
        return "☆☆";
    else if (rating >= 2)
        return "☆☆☆";
    else if (raing >= 1)
        return "☆☆☆☆";
    else
        return "☆☆☆☆☆";
}

// function returns the graphic representation of remining price
function graphicRemainPrice(price) {
    if (price === "$$$$")
        return "";
    else if (price === "$$$")
        return "$";
    else if (price === "$$")
        return "$$";
    else if (price === "$")
        return "$$$";
    else
        return "$$$$";
}

const styles = StyleSheet.create({
    cartName: {
        fontSize: 17
    },
    introduction: {
        backgroundColor: '#FFFFFF',
        width: Dimensions.get("window").width,
        padding: Dimensions.get("window").width * 0.027
    },
    ratingGraph: {
        // color: '#e10000',
        color: '#f6b842',
    },
    remainGraph: {
        color: '#B1B1B1',
    },
});

export default Introduction;