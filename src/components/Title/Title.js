import React from "react";
import "./Title.css";

const Title = props => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <div className="row">
            <h1 className="title display-4">Clicky Game!</h1>
            <h3 className="subHeader">Click on a puppy to get points, but be careful! Click on a pup card twice and you lose!
            </h3>
        </div>
        </div>
    </div>
);

export default Title;
