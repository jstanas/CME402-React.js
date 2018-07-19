import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

class Name extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:'Holly'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const newName = e.target.querySelector('input[type="text"]').value;
        this.setState({name: newName});
        e.preventDefault();
    }

    render(){
        return(
            <div id="entry">
                <h1>Hello!  My name is {this.state.name}!</h1>
                <form action="#" onSubmit={this.handleChange}>
                <label for="name">What is your name?&nbsp;</label><br/>
                <input type="text" id="name"/><br/><br/>
                <input type="submit"/>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<Name />, document.getElementById('app'));