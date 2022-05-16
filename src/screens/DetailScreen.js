import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import Introduction from '../components/CartDetail/Introduction';
import Dishes from '../components/CartDetail/Dishes';
import Menu from '../components/CartDetail/Menu';
import Location from '../components/CartDetail/Location';
import Info from '../components/CartDetail/Info';
import Social from '../components/CartDetail/Social';

const DetailScreen = ({ navigation }) => {

    // all detailed info of one cart
    const result = navigation.getParam('result');

    // prepare for rendering dollar sign
    return (
        <ScrollView>
            <Image style={styles.headerImage} source={{ uri: result.image_url }} />
            <Introduction result={result} />
            <Dishes result={result} subtitleStyle={styles.subtitle} />
            <Menu result={result} subtitleStyle={styles.subtitle} />
            <Location result={result} subtitleStyle={styles.subtitle} />
            <Info result={result} subtitleStyle={styles.subtitle} />
            <Social result={result} subtitleStyle={styles.subtitle} />

        </ScrollView>
    )
};

const styles = StyleSheet.create({

    headerImage: {
        width: 380,
        height: 150,
    },
    subtitle: {
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 5,
        color: '#746C70'
    }
});

export default DetailScreen;