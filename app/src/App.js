import React, {Component} from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
// import CardList from './components/CardList';
class App extends Component{

    constructor(props){
      super(props);
      this.state = {
        highScore: 0,
        currentScore: 0,
        guessed: []
      }
    }

    // testScore = (event) =>{
    //   this.setState( (prevState) =>({
    //     currentScore: prevState.currentScore + 1}));
    //   console.log(this.state.currentScore);
    // }
    render() {
      return (
        <div>
          <Nav highScore={this.state.highScore} currentScore= {this.state.currentScore}/>
          <Intro />
          {/* <Cardlist /> */}
        </div>
      )
    }

}

export default App;
