import React from 'react';

export class Subname extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const newName = e.target.querySelector('input[type="text"]').value;
        this.props.changeName(newName);
        e.preventDefault();
    }

    render(){
        return(
            <div id="entry">
                <h1>Hello!  My name is {this.props.name}!</h1>
                <form action="#" onSubmit={this.handleChange}>
                <label for="name">What is your name?&nbsp;</label><br/>
                <input type="text" id="name"/><br/><br/>
                <input type="submit"/>
                </form>
            </div>
        );
    }
}