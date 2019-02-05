import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalState from './reducers';
import GameScreen from './GameScreen';
import Nav from './Nav';

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuestion: 0,
            questions: []
        };
        this.store = this.configureStore();
    }
    render() {
        return (
            <Provider store={this.store}>
                    <Nav/>
            </Provider>
        );
    }
    configureStore() {
        return createStore(GlobalState, this.initialState);
    }
}