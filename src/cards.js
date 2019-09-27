import React from 'react';
import ReactDOM from 'react-dom';

function Card (props) {
    return (
        <div className="card">
            <img className="card-img-top" 
                src={props.featureImage} 
                alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary">Learn more</a>
            </div>
        </div>
    );
}

function CardList () {
    return (
        <div className="row">
            <div className="col-sm-4">
                <Card featureImage="https://vuejs.org/images/logo.png" 
                    title="Vue.js" 
                    description="The Progressive JavaScript Framework" 
                    link="https://vuejs.org/" />
            </div>
            <div className="col-sm-4">
                <Card featureImage="https://angular.io/assets/images/logos/angular/angular.svg" 
                    title="Angular" 
                    description="One framework. Mobile & desktop." 
                    link="https://angular.io/" />
            </div>
            <div className="col-sm-4">
                <Card featureImage="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                    title="React" 
                    description="A JavaScript library for building user interfaces" 
                    link="https://reactjs.org/" />
            </div>
        </div>
    );
}

class Cards extends React.Component {
    render () {
        return (
            <div>
                <h1>JavaScript Libraries</h1>
                <CardList />
            </div>
        );
    }
}

export default Cards;