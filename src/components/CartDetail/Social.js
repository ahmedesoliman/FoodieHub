import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Dimensions } from 'react-native';

const Social = ({ result, subtitleStyle }) => {

    return (
        <View>
            <Text style={subtitleStyle}>Social</Text>
            <View style={styles.container}>

                <TouchableOpacity onPress={() => Linking.openURL(result.social.website)}>
                    <Image style={styles.iconStyle} source={require("../../../assets/images/Website.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL(result.social.facebook)}>
                    <Image style={styles.iconStyle} source={require("../../../assets/images/Facebook.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL(result.social.instagram)}>
                    <Image style={styles.iconStyle} source={require("../../../assets/images/Instagram.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL(result.social.yelp)}>
                    <Image style={styles.iconStyle} source={require("../../../assets/images/Yelp.png")} />
                </TouchableOpacity>

            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingVertical: Dimensions.get("window").width * 0.04,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    iconStyle: {
        width: 40,
        height: 40,
        marginRight: 8
    },
});

export default Social;