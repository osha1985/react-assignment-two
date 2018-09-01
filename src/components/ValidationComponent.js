import React from 'react';

const ValidationComponent = (props) => {
    if (props.textLength < 5) {
        return <p>The text is too short</p>;
    } else {
        return <p>Text long enough</p>;
    }
};

export default ValidationComponent;