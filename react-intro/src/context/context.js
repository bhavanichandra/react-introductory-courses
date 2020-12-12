import React from 'react';

const context = React.createContext({ autheticated: false, login: () => {} });

export default context;
