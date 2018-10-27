import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
    <span onClick={() => {
      props.shuffleFriend();
      props.updateClicked(props.id)
    }
    }>
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
  </div>
);

export default FriendCard;
