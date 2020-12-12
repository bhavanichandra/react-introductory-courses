import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		const timer = setTimeout(() => {
			console.log('[Cockpit.js] Saved data to cloud!');
		}, 1000);
		return () => {
			console.log('[Cockpit.js] cleanup work!');
			clearTimeout(timer);
		};
	}, []);

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] cleanup work! 2nd useEffect');
		};
	});

	return (
		<div className={classes.Cockpit}>
			<h1>Hello, This is my first react app</h1>
			<button onClick={props.clicked} className={classes.Button}>
				Click to Show Persons
			</button>
		</div>
	);
};

export default React.memo(Cockpit);
