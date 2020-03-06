import React from 'react';
import {connect} from "react-redux";

class Messagebox extends React.Component {

    render() {
        let messages = this.props.msgs;
        return (
            <div>
                {messages.map((message, index) =>
                    <p key={index} style={{textAlign:"center"}}>
                        {message.toString()}
                    </p>)}
            </div>
        );
    };

}


function mapStateToProps(state, props) {
    return {
        msgs: state.messageBox.messages,
    }
}

export default connect(
    mapStateToProps,
)(Messagebox)