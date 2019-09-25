import React from 'react';
import ReactDOM from 'react-dom';
import "./style/main.less";

function Card (props) {
    return (
        <div className="card">
            <img className="card-img-top" 
            	src={props.featureImage} 
            	alt="cap image" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Learn more</a>
            </div>
        </div>
    );
}

function CardList () {
    return (
        <div className="row">
            <div className="col-sm-4">
                <Card featureImage="https://rikutalvinen.fi/images/rt-white-logo-v2.png" 
                	title="RT" 
                	description="Website" 
                	link="https://rikutalvinen.fi/" />
            </div>
            <div className="col-sm-4">
                <Card featureImage="https://rikutalvinen.fi/images/rt-white-logo-v2.png" 
                	title="RT" 
                	description="Website" 
                	link="https://rikutalvinen.fi/" />
            </div>
            <div className="col-sm-4">
                <Card featureImage="https://rikutalvinen.fi/images/rt-white-logo-v2.png" 
                	title="RT" 
                	description="Website" 
                	link="https://rikutalvinen.fi/" />
            </div>
        </div>
    );
}

class Welcome extends React.Component {
    render () {
        return (
        	<div>
	        	<h1>Hello World from React boilerplate</h1>
                <CardList />
            </div>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));
