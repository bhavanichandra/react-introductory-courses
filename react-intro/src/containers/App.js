import React, { Component } from 'react';
// import { v4 as uuid } from 'uuid';

import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxilary';
import withClass from '../hoc/withClass';
import Context from '../context/context';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constrctor');
		this.state = {
			persons: [
				{ id: 'JuPquOYK4b', name: 'Bhavani', age: 25 },
				{ id: 'ThiUlIPtKF', name: 'Ravi', age: 23 },
				{ id: 'oQkh4By--U', name: 'Aishwarya', age: 23 }
			],
			showPersons: false,
			showCockpit: true,
			changeCounter: 0,
			authenticated: false
		};
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('[App.js] componentDidUpdate');
	}

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
		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter: prevState.changeCounter + 1
			};
		});
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

	loginHandler = () => {
		this.setState({ authenticated: true });
	};

	render() {
		console.log('[App.js] rendering...');
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
			<Aux>
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}>
					Remove Cockpit
				</button>
				<Context.Provider
					value={{
						autheticated: this.state.authenticated,
						login: this.loginHandler
					}}>
					{this.state.showCockpit ? (
						<Cockpit
							clicked={this.togglePersonsHandler}
							login={this.loginHandler}
						/>
					) : null}
					{persons}
				</Context.Provider>
			</Aux>
		);
	}
}

export default withClass(App, classes.App);
