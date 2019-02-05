import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Question extends React.Component {
    render() {
        let url = this.props.question.attachment.url;
        return (
            <View style={styles.question}>
                <Text style={styles.questionNumber}> Question {this.props.index + 1} </Text>
                <View style={styles.imageView} >
                    <Image source={{ uri: url }} style={styles.image} />
                </View>
                <Text style={styles.actualQuestion}> {this.props.question.question} </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    question: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    questionNumber: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageView: {
        marginTop: 15,
        width: 250,
        height: 200
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
    actualQuestion: {
        marginTop: 20,
        fontSize: 17
    }
})