import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
    <span onClick={() => props.shuffleFriend()}>
      <img alt={props.name} src={props.image} />
    </span>
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Breed:</strong> {props.occupation}
        </li>
        <li>
          <strong>Hobby:</strong> {props.location}
        </li>
      </ul>
    </div>
  <span onClick={() => props.updateClicked(props.id)} className="remove">
      𝘅
  </span>
  </div>
);

export default FriendCard;
