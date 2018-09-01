import React, {Component} from 'react';
import ValidationComponent from "./components/ValidationComponent";
import './App.css';
import CharComponent from "./components/CharComponent";


class App extends Component {

    state = {
        input: ''
    };
    onChangeListener = (event) => {
        this.setState({input: event.target.value});
    };

    onClickListener = (index) => {;
        this.setState({input: this.state.input.slice(0, index) + this.state.input.slice(index + 1)})
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChangeListener} value={this.state.input}/>
                <p>{this.state.input.length}</p>
                <ValidationComponent textLength={this.state.input.length}/>
                <ul>{this.state.input.split('').map((char, index) => <CharComponent enteredText={char}
                                                                          click={()=> this.onClickListener(index)}/>)}</ul>
            </div>
        );
    }
}

export default App;
