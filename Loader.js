import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Loader extends React.Component {
    render() {
        return (
            <View style={styles.loader}>
                <Text style = {styles.text}> Loading... </Text>
                <Image style = {styles.gif} source={require('./assets/download.gif')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    gif: {
        marginTop: 100,
        width: 350,
    }
})