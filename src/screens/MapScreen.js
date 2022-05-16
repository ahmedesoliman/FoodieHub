import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>⚠ Map Screen{"\n"}Under Development</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: "#f6b842",
        height: 650
    },
    text: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default MapScreen;