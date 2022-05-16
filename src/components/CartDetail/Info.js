import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const Info = ({ result, subtitleStyle }) => {

    return (
        <View>
            <Text style={subtitleStyle}>Info</Text>
            <View style={styles.container}>

                <View style={styles.infoRow}>
                    <Image style={styles.iconStyle} source={require("../../../assets/images/Name.png")} />
                    <Text style={styles.infoText}>{result.owner_name}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Image style={styles.iconStyle} source={require("../../../assets/images/Phone.png")} />
                    <Text style={styles.infoText}>{result.phone}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Image style={styles.iconStyle} source={require("../../../assets/images/Email.png")} />
                    <Text style={styles.infoText}>{result.email}</Text>
                </View>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: Dimensions.get("window").width * 0.027
    },
    iconStyle: {
        width: 25,
        height: 25,
        marginRight: 8
    },
    infoRow: {
        flexDirection: 'row',
    },
    infoText: {
        alignSelf: 'center'
    },
    socialIconStyle: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    socialRow: {
        marginVertical: 10
    }
});

export default Info;