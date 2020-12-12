import React, { Component } from 'react';

import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxilary';
import Context from '../../../context/context';
class Person extends Component {
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	static contextType = Context;

	componentDidMount() {
		this.inputElementRef.current.focus();
		console.log(this.context.autheticated);
	}

	render() {
		console.log('[Person.js] Rendering');
		return (
			<Aux>
				{this.context.autheticated ? <p>Authenticated!</p> : null}
				<p onClick={this.props.click}>
					I'm a {this.props.name} and I am {this.props.age} years old.
				</p>
				{this.props.children ? <p>{this.props.children}</p> : ''}
				<input
					// ref={(inputEl) => {this.inputElement = inputEl;}}
					ref={this.inputElementRef}
					type='text'
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Aux>
		);
	}
}

export default withClass(Person, classes.Person);
