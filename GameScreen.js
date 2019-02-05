import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import NavBar from './NavBar';
import { Constants } from 'expo';
import Game from './Game';
import Result from './Result';
import Loader from './Loader';
import { questionAnswer, changeQuestion, submit, initQuestions, reset } from './actions';

class GameScreen extends React.Component {

  constructor(props) {
    super(props);
    this.loadNewQuizzes = this.loadNewQuizzes.bind(this);
    this.onQuestionAnswer = this.onQuestionAnswer.bind(this);
    this.onButtonPressed = this.onButtonPressed.bind(this);
  }

  onButtonPressed(buttonType) {
    switch (buttonType) {
      case 'previousBut':
        this.props.dispatch(changeQuestion(this.props.currentQuestion - 1))
        break;
      case 'nextBut':
        this.props.dispatch(changeQuestion(this.props.currentQuestion + 1))
        break;
      case 'submitBut':
        this.props.dispatch(submit(this.props.questions))
        break;
      case 'resetBut':
        this.props.dispatch(reset())
        break;
      case 'saveBut':
        AsyncStorage.setItem('@P7_2018_IWEB:quiz', JSON.stringify(this.props.questions))
          .then(() => {
            alert("Quizzes have been stored!");
          })
          .catch(() => {
            alert("Error storing quizzes!");
          })
        break;
      case 'loadBut':
        AsyncStorage.getItem('@P7_2018_IWEB:quiz')
          .then((questions) => {
            return parsedQuestions = JSON.parse(questions);
          })
          .then(() => {
            if (parsedQuestions.length > 0) {
            alert("Stored quizzes have been loaded!");
            }
          })
          .then(() => {
            if (parsedQuestions.length > 0) {
              this.props.dispatch(initQuestions(parsedQuestions))
            }
          })
          .catch(() => {
            alert("Error loading stored quizzes!");
          })
        break;
      case 'removeBut':
        AsyncStorage.clear()
          .then(() => {
            alert("Stored quizzes have been removed!");
          })
          .catch(() => {
            alert("Error removing stored quizzes!");
          })
        break;
      default:
        break;
    }
  }

  onQuestionAnswer(answer) {
    this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
  }

  loadNewQuizzes() {
    let quizzes = []
    fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=d4d596910885ba5cefe1')
      .then(results => {
        return results.json();
      })
      .then(data => {
        data.map((item) => {
          if (item.question) {
            quizzes.push(item);
          }
        })
        this.props.dispatch(initQuestions(quizzes))
      })
      .catch(error => {
        console.log("Error en Servidor")
      })
  }

  componentDidMount() {
    this.loadNewQuizzes();
  }

  render() {
    if (!this.props.finished) {
      return (
        <View style={styles.container}>
          <View style={styles.statusBar} />
          {this.props.questions.length > 0 ? (
            <View>
              <NavBar />
              <Game
                question={this.props.questions[this.props.currentQuestion]}
                index={this.props.currentQuestion}
                onQuestionAnswer={this.onQuestionAnswer}
                tipsList={this.props.questions[this.props.currentQuestion].tips}
                onButtonPressed={this.onButtonPressed}
                extreme={this.props.questions.length - 1}
                navigation={this.props.navigation}
              // finished={this.props.finished}
              />
              <Text style={styles.creds}>Created by JLL & AM</Text>
            </View>
          ) : (
              <Loader />
            )}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.statusBar} />
          <NavBar />
          <Result
            score={this.props.score}
            onButtonPressed={this.onButtonPressed}
            navigation={this.props.navigation}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // backgroundColor: '#e74c3c',
  },
  statusBar: {
    backgroundColor: '#424242',
    height: Constants.statusBarHeight,
  },
  creds: {
    marginTop: 40,
    fontSize: 10,
  }
});

function mapStateToProps(state) {
  return {
    ...state
  }
}

// export default GameScreen;
export default connect(mapStateToProps)(GameScreen);