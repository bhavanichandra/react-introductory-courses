import React, { Component } from 'react';
// import { v4 as uuid } from 'uuid';

import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
	state = {
		persons: [
			{ id: 'JuPquOYK4b', name: 'Bhavani', age: 25 },
			{ id: 'ThiUlIPtKF', name: 'Ravi', age: 23 },
			{ id: 'oQkh4By--U', name: 'Aishwarya', age: 23 }
		],
		showPersons: false
	};

	nameChangedHandler = (event, personId) => {
		const personIndex = this.state.persons.findIndex(
			(each) => each.id === personId
		);
		const person = {
			...this.state.persons[personIndex]
		};
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({ persons: persons });
	};

	deletePersonHandler = (index) => {
		const persons = this.state.persons.slice();
		persons.splice(index, 1);
		this.setState({ persons: persons });
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
					<Persons
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangedHandler}
					/>
				</div>
			);
		}
		return (
			<div className={classes.App}>
				<Cockpit clicked={this.togglePersonsHandler} />
				{persons}
			</div>
		);
	}
}

export default App;
