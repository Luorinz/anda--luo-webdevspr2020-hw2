import React from "react";
export default class FileReader extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = function () {
        this.props.handleClick(this.refs.select.value);
    };


    render() {
        return (
            <div>
                <select ref="select">
                    <option value={"very easy"}>very easy</option>
                    <option value={"easy"}>easy</option>
                    <option value={"average"}>average</option>
                    <option value={"hard"}>hard</option>
                    <option value={"very hard"}>very hard</option>
                    <option value={"impossible"}>impossible</option>

                </select>
                <button onClick={this.handleClick}>Start game</button>
            </div>
        );
    }
}