import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

class Contact extends React.Component{
	constructor(props){
		super(props);
	this.state={
		user:'tripp',
		password:'bulldog',
		authorized:false
		};
	this.authorize = this.authorize.bind(this);
	}

	render() {
		const login= (
		<form action="#" onsubmit={this.authorize}><br/>
		<label for="user">Username:</label><input type="text" id="username"/><br/>
		<label for="pass">Password:</label><input type="text" id="pass"/><br/>
		<input type="submit"/>
		</form>
		<br/>
		);

		const contactInfo = (
		<p>You are now logged in!</p>
		<ul><li>username@company.edu</li>
		<li>222.222.2222</li></ul>
		);

		return (
		<div id="authorization">
		<h1>{ this.state.authorized ? 'Contact' : 'Enter User Information' }</h1>
 		{ this.state.authorized ? contactInfo : login } </div>
		);
	}
}

ReactDOM.render(<Contact>, document.getElementById('app'));</Contact>
