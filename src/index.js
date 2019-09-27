import React from 'react';
import ReactDOM from 'react-dom';

import "./style/main.less";

import Cards from './cards.js';
import Form from './form.js';

class App extends React.Component {
    render () {
        return (
        	<div>
	        	<Cards />
				<Form />
			</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));