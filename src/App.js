import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/Nav";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
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
        <NavBar>0</NavBar>
        <Title></Title>
        <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            shuffleFriend={this.handleCorrectGuess}
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
