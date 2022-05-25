import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Dimensions } from 'react-native';

const Social = ({ result, subtitleStyle }) => {

    // an object to store the detailed content for the cart social section
    const socials = {
        website: {
            text: result.social.website,
            logo: require("../../../assets/images/Website.png")
        },
        facebook: {
            text: result.social.facebook,
            logo: require("../../../assets/images/Facebook.png")
        },
        instagram: {
            text: result.social.instagram,
            logo: require("../../../assets/images/Instagram.png")
        },
        yelp: {
            text: result.social.yelp,
            logo: require("../../../assets/images/Yelp.png")
        }
    }

    // dynamically render the social section
    return (
        noInfo(socials) ? null : <>
            <Text style={subtitleStyle}>Social</Text>
            <View style={styles.container}>
                {Object.keys(socials).map(type => {
                    const text = socials[type].text;  // text content of a type of social
                    const logo = socials[type].logo;  // logo of a type of info
                    return (
                        (text === "") ? null : <TouchableOpacity key={type} onPress={() => Linking.openURL(text)}>
                            <Image style={styles.iconStyle} source={logo} />
                        </TouchableOpacity>
                    )
                })}
            </View>
        </>
    )
};

/* @Brief: function check if the text var of all records of sub-obj in an obj are empty, aka ""
 * @Output: true if the they are all empty . Otherwise false
 */
function noInfo(obj) {
    let judge = true;
    for (const key of Object.keys(obj)) {
        if (obj[key].text != "") {
            judge = false;
            break;
        }
    }
    return judge
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingVertical: Dimensions.get("window").width * 0.04,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 10
    },
    iconStyle: {
        width: 40,
        height: 40,
        marginRight: 8
    },
});

export default Social;