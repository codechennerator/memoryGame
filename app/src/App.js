import React, {Component} from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import cards from './cards';
import {Card, CardList} from './components/Card';


class App extends Component{

    constructor(props){
      super(props);
      this.state = {
        topScore: 0,
        currentScore: 0,
        guessed: [],
        cards: cards.slice(0)
      }
    }

    shuffleCards = () =>{
      let array = this.state.cards.slice(0);
      
      for (let i = array.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      this.setState(prevState => ({
        cards: array
      }));
      console.log(this.state);
    }

    checkAnswer = (id) =>{
      let stateOfGuessed = this.state.guessed.slice();
      if (stateOfGuessed.indexOf(id) !== -1){
        console.log("You already chose that!");

        //Checks for high score
        let topScore = (this.state.topScore < this.state.currentScore) ? this.state.currentScore : this.state.topScore;

        this.setState(() => ({
          guessed: [],
          currentScore: 0,
          topScore: topScore
        }));
      }else{
        console.log("Correct!");
        stateOfGuessed.push(id);
        this.setState( (prevState) =>({
          currentScore: prevState.currentScore + 1,
          guessed: stateOfGuessed
        }));
      }
      this.shuffleCards();
    }

    render() {
      return (
        <div>
          <Nav highScore={this.state.topScore} currentScore= {this.state.currentScore}/>
          <Intro />
          <CardList> 
            { 
              this.state.cards.map(card => (
                <Card key={card.id} name={card.name} img={card.img} onClick={() => this.checkAnswer(card.id)}/>
                ))
            }
          </CardList>


        </div>
      )
    }

}

export default App;
