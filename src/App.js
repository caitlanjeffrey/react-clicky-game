import React, { Component } from "react";
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import friends from "./friends.json";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click each card. Don't click the same card twice or they will be rearranged."

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    correctGuesses,
    bestScore,
    clickMessage,
  };

  addAClick = id => {
    const friends = this.state.friends
    const clickedMatch = friends.filter(friends => friends.id === id)

    if (clickedMatch[0].clicked) {
      console.log("Correct Guesses: " + correctGuesses)
      console.log("Best Score: " + bestScore)

      correctGuesses = 0;
      clickMessage = "Oops! You've already clicked this card!"

      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false
      }

      this.setState({ clickMessage })
      this.setState({ correctGuesses })
      this.setState({ friends })

    } else if (correctGuesses < 11) {
      clickedMatch[0].clicked = true
      correctGuesses++
      clickMessage = "Success!"
      if (correctGuesses > bestScore) {
        bestScore = correctGuesses
        this.setState({ bestScore })
      }
      friends.sort(function (a, b) {
        return 0.5 - Math.random()
      })

      this.setState({ clickMessage })
      this.setState({ correctGuesses })
      this.setState({ friends })

    } else {
      clickedMatch[0].clicked = true
      correctGuesses = 0
      clickMessage = "Good Job!"
      bestScore = 12
      this.setState({ bestScore })

      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false
      }

      friends.sort(function (a, b) {
        return 0.5 - Math.random()
      })

      this.setState({ clickMessage })
      this.setState({ correctGuesses })
      this.setState({ friends })
    }


  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Jumbotron></Jumbotron>
        <Wrapper>
          {this.state.friends.map(friend => (
            <Card
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              quote={friend.quote}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
