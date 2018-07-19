import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Subname } from './Subname';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

class Name extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:'Holly'};
        this.changeName = this.changeName.bind(this);
    }

    changeName(newName){
        this.setState({name: newName});
    }

    render(){
        return <Subname name={this.state.name}
        changeName={this.changeName} />
    }
}

ReactDOM.render(<Name />, document.getElementById('app'));