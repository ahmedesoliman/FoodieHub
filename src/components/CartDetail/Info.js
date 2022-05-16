import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const Info = ({ result, subtitleStyle }) => {

    return (
        <View>
            <Text style={subtitleStyle}>Info</Text>
            <View style={styles.container}>
                <Text>Owner: {result.owner_name}</Text>
                <Text>Phone: {result.phone}</Text>
                {/* <AntDesign name="instagram" size={24} color="black" /> */}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: Dimensions.get("window").width * 0.027
    },
    menuImage: {
        width: 260,
        height: 400,
        borderRadius: 4,
        marginLeft: 5
    }
});

export default Info;