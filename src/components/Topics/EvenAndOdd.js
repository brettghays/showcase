import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    constructor (){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
        
        /* this.updateUserInput=this.updateUserInput.bind(this)
        this.splitArray = this.splitArray.bind(this) */
    }

    updateUserInput(val) {
        this.setState({ 
            userInput: val 
        })
    }

    splitArray(val){
        let evens = val.split(',').map(Number).filter((num) => num % 2 === 0)
        let odds = val.split(',').map(Number).filter((num) => num % 2 !== 0)
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }

    render (){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input type="text" className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)} />
                <button className="confirmationButton" onClick={()=> {this.splitArray(this.state.userInput)}}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}