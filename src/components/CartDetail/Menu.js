import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const Menu = ({ result, subtitleStyle }) => {

    if (result.menu.length != 0) {
        return (
            <View>
                <Text style={subtitleStyle}>Menu</Text>
                <View style={styles.container}>
                    <FlatList
                        style={styles.flatlist}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={result.menu}
                        keyExtractor={(photo) => photo}
                        renderItem={({ item }) => {
                            return <Image style={styles.menuImage} source={{ uri: item }} />
                        }}
                    />
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
        paddingVertical: 10
    },
    menuImage: {
        width: 260,
        height: 400,
        borderRadius: 4,
        marginLeft: 5
    }
});

export default Menu;