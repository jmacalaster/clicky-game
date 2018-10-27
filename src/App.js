import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/Nav";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

var clickCount = 0;
var topScore = 0;


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  updateClicked = id => {
    const friends = this.state.friends;
    for(var i in friends){
      if (friends[i].id === id){
        if (friends[i].clicked === false){
          clickCount++;
          friends[i].clicked = true;
        }
        else
          alert("Ruff, you clicked on me already!")
      break;
      }
    }
    this.setState({ friends });
    console.log(friends);
  };

  //Shuffle the friends array every time a card is clicked 
  shuffleFriend = friends => {
    let currentIndex = friends.length -1;
    for(; currentIndex>0; currentIndex--){
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      const temp = friends[currentIndex];
      friends[currentIndex] = friends[randomIndex];
      friends[randomIndex] = temp;
    }
    return friends;
  }

  handleCorrectGuess = () => {
    this.setState({
      friends: this.shuffleFriend(friends)
    })
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <NavBar
          clickCount={clickCount}
          topScore={topScore}
        />
        <Title></Title>
        <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            shuffleFriend={this.handleCorrectGuess}
            updateClicked={this.updateClicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
