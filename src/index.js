import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	//passing txt as Props.
	<App txt1="this is prop text1"  txt2="this is prop text2"/>,
    document.getElementById('root')
    			);
