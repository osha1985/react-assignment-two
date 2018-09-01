import React from 'react';

const CharComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };

    return <li style={style} onClick={props.click}>{props.enteredText}</li>;
};
export default CharComponent;