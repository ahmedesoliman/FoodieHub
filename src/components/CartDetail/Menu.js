import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Menu = ({ result, subtitleStyle }) => {
    return (
        result.menu.length === 0 ? null : <View>
            <Text style={subtitleStyle}>Menu</Text>
            <View style={styles.container}>
                <Image style={styles.menuImage} source={{ uri: result.menu[0] }} />
            </View>
        </View>
    )
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
    }
});

export default Menu;