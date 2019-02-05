import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class NavBar extends React.Component {
    render() {
        return (
            <View style={styles.navBar}>
                <Image source={require('./assets/download.png')} style={styles.icon} />
                <Text style={styles.txt}> QUIZ game </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        backgroundColor: '#424242',
        height: 30,
        width:Dimensions.get('window').width,
        alignItems:'center',
        justifyContent: 'flex-start'
    },
    icon: {
        width: 25, 
        height: 25
    },
    txt: {
    	color: 'white'
    }
})