import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import NavBar from './NavBar';
import { Constants } from 'expo';

export default class InitialScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBar} />
                <NavBar />
                <View style={styles.buttContainer}>
                <Button 
                style={styles.button}
                title= "Start Quiz"
                onPress = {() => this.props.navigation.navigate('GameScreen')}
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    statusBar: {
        backgroundColor: '#424242',
        height: Constants.statusBarHeight,
    },
    buttContainer: {
        marginTop: 200,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 80,
    }

});
