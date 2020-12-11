import React from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {
	return (
		<div className={classes.Cockpit}>
			<h1>Hello, This is my first react app</h1>
			<button onClick={props.clicked} className={classes.Button}>
				Click to Show Persons
			</button>
		</div>
	);
};

export default cockpit;
