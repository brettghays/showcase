import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [{"name": "Brett", "age": 36}, {"name":"Megan", "age": 34, "eyeColor": "blue"}, {"name": "Carter", "eyeColor": "blue"}, {"name": "Kendyl", "eyeColor": "blue"}],
            userInput: "",
            filteredArray: []
        }
    }

    updateUserInput(val) {
        this.setState({
            userInput: val
        })
    }

    filterArray(y){
        let unfiltered = this.state.unFilteredArray
        let filtered = unfiltered.filter((x,y) => x[y])
        console.log(filtered)
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unfiltered Array: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input type="text" placeholder="'name' or 'age' or 'eyeColor'" className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)} />
                <button className="confirmationButton" onClick={() => {this.filterArray(this.state.userInput)}}>Filter</button>
                <span className="resultsBox filterObjectPB">Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}