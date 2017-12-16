import React, {Component} from 'react';

export default class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateFirstNum(num){
        this.setState({
            number1: Number(num)
        })
    }

    updateSecondNum(num){
        this.setState({
            number2: Number(num)
        })
    }

    sum(){
        let sum = this.state.number1 + this.state.number2
        this.setState({
            sum: sum
        })
    }

    render(){
        return(
            <div  className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="text" className="inputLine" name="" id="" onChange = {(e) => this.updateFirstNum(e.target.value)}/>
                <input type="text" className="inputLine" name="" id="" onChange = {(e) => this.updateSecondNum(e.target.value)}/>
                <button className="confirmationButton" onClick = {() => this.sum()}>Sum</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}