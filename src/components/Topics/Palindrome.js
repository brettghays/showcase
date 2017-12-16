import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    updateUserInput(val) {
        this.setState({
            userInput: val
        })
    }

    checkPalindrome(val){
        let word = Array.from(val)
        let palindrome = word.reverse().join().replace(/,/g,"")
        val === palindrome ? this.setState({palindrome: 'true'}) : this.setState({palindrome: 'false'})
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input type="text" name="" id="" placeholder = "Example: bob" className="inputLine" onChange = {(e) => this.updateUserInput(e.target.value)}/>
            <button className="confirmationButton" onClick = {() => this.checkPalindrome(this.state.userInput)}>Verify</button>
            <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}