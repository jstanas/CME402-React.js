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
		<div>
		<form action="#" onSubmit={this.authorize}><br/>
		<label for="user">Username:&nbsp;</label><input type="text" id="username"/><br/><br/>
		<label for="pass">Password:&nbsp;</label><input type="password" id="pass"/><br/><br/>
		<input type="submit"/>
		</form>
		</div>
		);

		const contactInfo = (
		<div>
		<p>You are now logged in!</p>
		<ul><li>username@company.edu</li>
		<li>222.222.2222</li></ul>
		</div>
		);

		return (
		<div id="authorization">
		<h1>{ this.state.authorized ? 'Contact' : 'Enter User Information' }</h1>
 		{ this.state.authorized ? contactInfo : login }
 		</div>
		);
	}

	authorize(e) {
		const user = e.target.querySelector('input[type="text"]').value;
		const password = e.target.querySelector('input[type="password"]').value; 
		if (user===this.state.user && password ===this.state.password) {
			this.setState({ authorized:true});}
	}
}
ReactDOM.render(<Contact />, document.getElementById('app'));