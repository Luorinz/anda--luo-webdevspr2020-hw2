import React from "react";

export default class UserInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = function (e) {
        this.props.onInputChange(this.refs.input.value);
    };


    render() {
        return (
            <div>
                <input style={{"border": "solid"}} ref="input"/>
                <button style={{"border": "solid"}} onClick={this.handleSubmit}>submit</button>
            </div>
        );
    };

}