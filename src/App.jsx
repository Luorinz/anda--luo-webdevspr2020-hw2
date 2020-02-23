//...
export default class App extends React.Component {

    // Constructor is called one time, before render is called.
    // This is a good place to set an initial values
    constructor() {
        super();

        // When accessing state the first time, you need to set it
        // like below, but after you'll need to use this.setState
        this.state = {
            number: 1
        };
    }

    _incrementNumber = function() {
        // setState updates the state for all the key/values that are passed in.
        // if there are any existing values, they will stay the same
        this.setState({
            number: this.state.number + 1
        })
    };

    // ...

    render() {
        //...
        return (
            //...
            // Notice that I need to use an arrow function to invoke
            // You can also use .bind(this): does anyone know what this does?
            <div>
                <button onClick={() => this._incrementNumber()}>Increment Number</button>

                {/*<button onClick={this._incrementNumber.bind(this)}>Increment Number</button>*/}
            </div>
            
        {/* You can ACCESS state by this.state, but not SET values this way */}
        <h1>{this.state.number}</h1>
        </div>
    )
    }
}