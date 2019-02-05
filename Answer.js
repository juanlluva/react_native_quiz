import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class Answer extends React.Component {
    render() {
        { let url = this.props.question.attachment.url; }
        return (
            <View style={styles.answer}>
                <TextInput style={styles.answerBox} value = {this.props.question.userAnswer || ""} onChangeText={(entry) => {
                    this.props.onQuestionAnswer(entry);
                }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    answer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
    answerBox: {
        height: 30,
        width: 200,
        backgroundColor: 'skyblue'

    }
})