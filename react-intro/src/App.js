import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
class App extends Component {
	state = {
		persons: [
			{ name: 'Bhavani', age: 25 },
			{ name: 'Ravi', age: 23 },
			{ name: 'Aishwarya', age: 23 }
		]
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

	render() {
		return (
			<div className='App'>
				<h1>Hello, This is my first react app</h1>
				<button onClick={() => this.switchNameHandler('Soundarya')}>
					Switch Name
				</button>
				<div>
					<Person
						name={this.state.persons[0].name}
						age={this.state.persons[0].age}
					/>
					<Person
						click={this.switchNameHandler.bind(this, 'Varshini')}
						name={this.state.persons[1].name}
						age={this.state.persons[1].age}
						changed={this.nameChangedHandler}>
						My Hobbies: Racing
					</Person>
					<Person
						name={this.state.persons[2].name}
						age={this.state.persons[2].age}
					/>
				</div>
			</div>
		);
	}
}

export default App;
