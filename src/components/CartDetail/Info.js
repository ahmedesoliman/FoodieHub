import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
        paddingVertical: 10,
        paddingLeft: 5
    },
    menuImage: {
        width: 260,
        height: 400,
        borderRadius: 4,
        marginLeft: 5
    }
});

export default Info;