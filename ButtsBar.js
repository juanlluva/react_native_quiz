import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';

export default class ButtsBar extends React.Component {
    render() {
        return (
            <View style={styles.buttsContainer}>
                <View style={styles.buttsBar}>
                    <TouchableHighlight onPress={() => {
                        this.props.onButtonPressed('resetBut')
                        this.props.navigation.navigate('InitialScreen')
                    }}>
                        <View style={styles.backButt}>
                            <Text style={styles.txt}>Back</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight disabled={this.props.index === 0} onPress={() => this.props.onButtonPressed('previousBut')}>
                        <View style={styles.butt}>
                            <Text style={styles.txt}>Previous</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.onButtonPressed('submitBut')}>
                        <View style={styles.butt}>
                            <Text style={styles.txt}>Submit</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight disabled={this.props.index === this.props.extreme} onPress={() => this.props.onButtonPressed('nextBut')}>
                        <View style={styles.butt}>
                            <Text style={styles.txt}>Next</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttsBar}>
                    <Button
                        style={styles.button}
                        title="Save"
                        onPress={() => this.props.onButtonPressed('saveBut')}
                    />
                    <Button
                        style={styles.button}
                        title="Load"
                        onPress={() => this.props.onButtonPressed('loadBut')}
                    />
                    <Button
                        style={styles.button}
                        title="Remove"
                        onPress={() => this.props.onButtonPressed('removeBut')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttsBar: {
        alignSelf: 'stretch',
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    butt: {
        marginLeft: 10,
        marginRight: 10,
        width: 70,
        height: 40,
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButt: {
        marginLeft: 10,
        marginRight: 10,
        width: 40,
        height: 40,
        backgroundColor: '#3498db',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 30,
        height: 40,
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
    	color: 'white'
    }
})