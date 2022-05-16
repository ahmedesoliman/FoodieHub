import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Menu = ({ result, subtitleStyle }) => {

    if (result.menu.length != 0) {
        return (
            <View>
                <Text style={subtitleStyle}>Menu</Text>
                <View style={styles.container}>
                    <Image style={styles.menuImage} source={{ uri: result.menu[0] }} />
                </View>
            </View>
        )
    }
    else {
        return null
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    menuImage: {
        resizeMode: 'stretch',
        height: 300,
        borderRadius: 4,
        marginLeft: 5
    }
});

export default Menu;