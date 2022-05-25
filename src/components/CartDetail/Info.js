import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const Info = ({ result, subtitleStyle }) => {

    // an object to store the detailed content for the cart info section
    const infos = {
        name: {
            text: result.owner_name,
            logo: require("../../../assets/images/Name.png")
        },
        phone: {
            text: result.phone,
            logo: require("../../../assets/images/Phone.png")
        },
        email: {
            text: result.email,
            logo: require("../../../assets/images/Email.png")
        }
    }

    // dynamically render the info section
    return (
        noInfo(infos) ? null : <>
            <Text style={subtitleStyle}>Info</Text>
            <View style={styles.container}>
                {Object.keys(infos).map(type => {
                    const text = infos[type].text;  // text content of a type of info 
                    const logo = infos[type].logo;  // logo of a type of info
                    return (
                        (text === "") ? null : <View key={type} style={styles.infoRow}>
                            <Image style={styles.iconStyle} source={logo} />
                            <Text style={styles.infoText}>{text}</Text>
                        </View>
                    );
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