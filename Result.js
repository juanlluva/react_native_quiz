import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Result extends React.Component {
    render() {
        return (
            <View style={styles.result}>
                <Text style={styles.title}>End of the game!</Text>
                <Text style={styles.subtitle}>Your final score is</Text>
                <View style={styles.scoreView} >
                    <Text style={styles.score}>{this.props.score} </Text>
                </View>
                <View style={styles.endButt}>
                    <Button
                        title="End"
                        onPress={() => {
                            this.props.navigation.navigate('InitialScreen')
                            this.props.onButtonPressed('resetBut')
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    result: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    scoreView: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'steelblue',
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    subtitle: {
        fontSize: 16,
        marginTop: 20
    },
    score: {
        fontSize: 40,
        marginTop: 12,
        marginLeft: 29
    },
    endButt: {
        marginTop: 60
    }
})