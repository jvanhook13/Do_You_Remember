import React, {Component} from "react";
import "./Board.css";
import numberBlocks from "../../numbers.json";
import Card from "../Card";
import Header from "../Header/Header";




class Board extends Component {


    state = {

       numbers: numberBlocks ,
        score: 0


    }

    resetGame = () => {
        this.setState({
            score: 0,
            numbers: numberBlocks
        })      
    }

    handleCorrect = newCards => {
        this.setState({
           numbers: this.shuffleArray(newCards), 
            score: this.state.score +1,
        });

        if (this.state.score === 16) {
            this.resetGame();
            console.log("You won!");
        }

    };

    handleWrong = () => {
        this.resetGame();
    };

    handleClick = name => {
        let guessedCorrect = false;
        const newCards = this.state.numbers.map(number => {
           const newPic = {...number};
           if (newPic.name === name) {
               if(!newPic.clicked){
                   console.log("Already guessed------------");
                   newPic.clicked = true;
                   guessedCorrect = true;
               }
               
           }
           return newPic;
       })       
       console.log("GUESSED CORRECT: ", guessedCorrect)
       //if guessed correct is true handleCorrect, else handle as wrong
       guessedCorrect ? this.handleCorrect(newCards) : this.handleWrong(newCards)
    };

    shuffleArray = numbers => {
        for (let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
        return (numbers);
    };

    render() {

        return(

            <div>
                <Header />
                <div className="boardWrapper">
                    <div className="board">
                    {this.state.numbers.map(number => {
                        return (

                            <Card
                            name={number.name}
                            key={number.id}
                            handleClick={this.handleClick}
                            src={number.image}
                            alt={number.name}
                        />)






                    })}

                    </div>
                </div>
            </div>       


        )



    }

}

export default Board