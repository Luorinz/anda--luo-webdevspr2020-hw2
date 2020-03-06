import React, {Component} from "react";
import Util from "./util";
import UserInput from "./input";
import Messagebox from "./messagebox";
import {addMessage} from "./actions/message-actions";
import {connect} from "react-redux";
import {guess} from "./actions/user-actions";
import store from "./store";
import FileReader from "./file-reader";
import {init, setDifficultyAction} from "./actions/game-actions";


const MAXGUESS = 4;
const DIFF_TO_WORD = {  // first num is number of words, second num is length
    "very easy": [5, 4],
    "easy": [7, 6],
    "average": [9, 8],
    "hard": [10, 10],
    "very hard": [12, 12],
    "impossible": [15, 15],
};

class Controller extends Component {
    constructor(props) {
        super(props);
        this.util = new Util();
        this.handleClick = this.handleClick.bind(this);
        this.initialize = this.initialize.bind(this);
    }


    /**
     * Handle the submit button of input
     * @param word
     * @returns {null}
     */
    handleClick = function (word) {
        let curGuess = store.getState().user.curGuess;
        let isOver = store.getState().user.isOver;
        if (curGuess === MAXGUESS || isOver) return null;
        this.props.sendMessage("User input: " + word);
        if (word === this.props.answer) {
            this.props.handleNewGuess(word, true);
            curGuess = store.getState().user.curGuess;
            this.props.sendMessage("You win the game in " + curGuess + " try/tries");
        } else {
            this.props.handleNewGuess(word, false);
            let res = this.util.checkWord(word, this.props.answer);
            curGuess = store.getState().user.curGuess;
            let availableGuessLeft = MAXGUESS - curGuess;
            this.props.sendMessage(res + "/" + word.length + " correct");
            this.props.sendMessage("Guess (" + availableGuessLeft + " left)?");
            if (availableGuessLeft === 0) this.props.sendMessage("You lose. The answer is " + this.props.answer + ".");

        }
    };


    initialize = function (difficulty) {
        this.props.setDifficulty(difficulty);
        var diff = store.getState().game.difficulty;
        var num = DIFF_TO_WORD[diff][0];
        var len = DIFF_TO_WORD[diff][1];
        var wordList = [];

        fetch("./word_list.txt").then(raw => raw.text()).then(text => text.split("\n")).then(words => {
            let tempList = [];
            for (let i = 0; i < words.length; i++) {
                let word = words[i];
                if (word.length === len) tempList.push(word);
            }
            tempList.sort(() => Math.random() > 0.5 ? -1 : 1);
            wordList = tempList.slice(0, num);
        }).then(() => {
            this.props.init(wordList, wordList[Math.floor(Math.random() * wordList.length)]);
            this.props.sendMessage("Word List:");
            for (let word of wordList) {
                this.props.sendMessage(word);
            }
            this.props.sendMessage("Guess(" + MAXGUESS + " left)?")
        });


    };

    componentDidMount() {

    }

    render() {
        return (
            <div>

                {store.getState().game.difficulty === "" ?
                    <div>
                        <h1>Please set the difficulty</h1>
                        <FileReader handleClick={this.initialize}/>

                        <h1>Rules</h1>
                        <p>You have 4 opportunites to guess the word</p>
                        <h3>Example</h3>
                        <div>
                            <p>Word List:</p>
                            <p>SCORPION</p>
                            <p>FLOGGING</p>
                            <p>CROPPERS</p>
                            <p>MIGRAINE</p>
                            <p>FOOTNOTE</p>
                            <p>REFINERY</p>
                            <p>VAULTING</p>
                            <p>VICARAGE</p>
                            <p>PROTRACT</p>
                            <p>DESCENTS</p>
                            <p>Guess (4 left)?</p>
                            <p></p>
                            <p>User input: migraine</p>
                            <p></p>
                            <p>0/8 correct</p>

                        </div>

                    </div>
                    :
                    <div>
                        <UserInput onInputChange={this.handleClick}/>
                        <Messagebox/>
                    </div>
                }

            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        answer: state.game.answer,
        length: state.game.wordList.length,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        handleNewGuess: function (word, isOver) {
            dispatch(guess(word, isOver));
        },
        sendMessage: (msg) => dispatch(addMessage(msg)),
        showState: (res) => {
            let curGuess = store.getState().user.curGuess;
            let curWord = store.getState().user.curWord;
            dispatch(addMessage("curTry= " + curGuess + " curWord= " + curWord + " curRes= " + res));
        },
        setDifficulty: (difficulty) => dispatch(setDifficultyAction(difficulty)),
        init: (wordList, answer) => dispatch(init(wordList, answer)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Controller)