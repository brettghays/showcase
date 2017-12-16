import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                "Brett is cool",
                "Megan is Brett's wife",
                "Carter is Brett's son",
                "Kendyl is one"
            ],
            userInput: '',
            filteredArray: []
        }
    }

    updateUserInput(val) {
        this.setState({
            userInput: val
        })
    }

    filterString(val) {
        let arr = this.state.unFilteredArray
        let filteredArray = arr.filter(x => x.includes(val))
        this.setState({
            filteredArray: filteredArray
        })
    }
    
    render(){
        return(
            <div  className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered Array: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input type="text" className="inputLine" placeholder = "Example: string" onChange = {(e) => this.updateUserInput(e.target.value)}/>
                <button className="confirmationButton" onClick={() => {this.filterString(this.state.userInput)}}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}