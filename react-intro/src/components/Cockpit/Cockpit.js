import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.module.css';
import Context from '../../context/context';

const Cockpit = (props) => {
	const toggleButtonRef = useRef(null);
	const authContext = useContext(Context);

	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		const timer = setTimeout(() => {
			toggleButtonRef.current.click();
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
			<button
				ref={toggleButtonRef}
				onClick={props.clicked}
				className={classes.Button}>
				Click to Show Persons
			</button>
			<button onClick={authContext.login}>Login</button>
		</div>
	);
};

export default React.memo(Cockpit);
