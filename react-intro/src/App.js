import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

import classes from './App.module.css';

import Person from './Person/Person';
class App extends Component {
	state = {
		persons: [
			{ name: 'Bhavani', age: 25 },
			{ name: 'Ravi', age: 23 },
			{ name: 'Aishwarya', age: 23 }
		],
		showPersons: false
	};

	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: 'Bhavani', age: 25 },
				{ name: newName, age: 23 },
				{ name: 'Aishwarya', age: 23 }
			]
		});
	};

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Ramu', age: 25 },
				{ name: event.target.value, age: 23 },
				{ name: 'Aishwarya', age: 23 }
			]
		});
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((each) => {
						return <Person name={each.name} age={each.age} key={uuid()} />;
					})}
				</div>
			);
		}
		return (
			<div className={classes.App}>
				<h1>Hello, This is my first react app</h1>
				<button onClick={this.togglePersonsHandler}>
					Click to Show Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
