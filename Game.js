import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtsBar from "./ButtsBar";
import Tips from './Tips';
import Question from './Question';
import Answer from './Answer';

export default class Game extends React.Component {
    render() {
        return (
            <View style={styles.game}>
                <Question
                    question={this.props.question}
                    index={this.props.index}
                />
                {<Answer
                    question={this.props.question}
                    onQuestionAnswer={this.props.onQuestionAnswer}
                />}
                <Tips
                    tipsList={this.props.tipsList}
                />
                <ButtsBar
                    index={this.props.index}
                    extreme={this.props.extreme}
                    // finished={this.props.finished}
                    navigation={this.props.navigation}
                    onButtonPressed={this.props.onButtonPressed}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    game: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})