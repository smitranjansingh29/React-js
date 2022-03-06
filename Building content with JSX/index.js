//import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText(){
    // return 'Click on me!';
// }
//create a react component
const App = () => {
    const buttonText = 'click me';
    const buttonText1 = {text:'click me'};

    const labelText = 'Enter name:';
    const style = {backgroundColor:"blue" , color : "white"};
    return ( 
     <div>
        <label className="label" htmlFor="name">{labelText}</label>
        <input type="text" id="name" />
        <button style={style}>{buttonText}</button>
        <button style={style}>{buttonText1.text}</button>
        {/* <button style={{backgroundColor: "blue" , color : "white"}}>{getButtonText()}</button> */}
    </div>
    );
};

//take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
