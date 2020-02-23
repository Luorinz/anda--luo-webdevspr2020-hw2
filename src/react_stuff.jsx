//...app.jsx
import CustomInput from "./customInput";

//
// <div className="simpleCalculator">
//     <div>
//         {greeting}
//     </div>
//
//     <div className="inputFields">
//         <CustomInput/>
//         <CustomInput/>
//     </div>
//
//     <div>
//         <button>Add</button>
//     </div>
// </div>


// customInput.jsx

import React from 'react';

export default class CustomInput extends React.Component {

    render() {

        return (
            <input type="number"/>
        )

    }

}