import React, { Component } from "react";
import Choice from "../components/Choice";


class ChoiceContainer extends Component {
    constructor(props) {
        super(props);
        this.onOptionChange = this.onOptionChange.bind(this);
        this.state = {
            selectedOption : ""
        };
    }

    onOptionChange(e) {
        console.log("reached");
        this.setState({selectedOption : e.target.value});
        console.log(this.state.selectedOption);
    }

    submit(e) {
        e.preventDefault();
        var temp = this.state.selectedOption;
        console.log("Submitted answer: ", temp);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-check">
                    <label>
                        <input
                            type="radio"
                            value="option1"
                            checked={this.state.selectedOption === "option1"}
                            onChange={this.onOptionChange}
                            name="react-tips"
                            className="form-check-input"
                            />
                      Option 1
                    </label>
                  </div>
                  <div className="form-check">
                    <label>
                    <input
                            type="radio"
                            value="option2"
                            checked={this.state.selectedOption === "option2"}
                            onChange={this.onOptionChange}
                            name="react-tips"
                            className="form-check-input"
                            />
                      Option 2
                    </label>
                  </div>
                  <div className="form-check">
                    <label>
                    <input
                            type="radio"
                            value="option3"
                            checked={this.state.selectedOption === "option3"}
                            onChange={this.onOptionChange}
                            name="react-tips"
                            className="form-check-input"
                            />
                      Option 3
                    </label>
                  </div>
                  <div className="form-check">
                    <label>
                    <input
                            type="radio"
                            value="option4"
                            checked={this.state.selectedOption === "option4"}
                            onChange={this.onOptionChange}
                            name="react-tips"
                            className="form-check-input"
                            />
                      Option 4
                    </label>
                  </div>
                  <div className="form-group">
                    <button className="continue-btn" type="submit" onClick={this.submit}>
                      Continue
                    </button>
                  </div>
                </form>
              </div>
        );
    }
}
  export default ChoiceContainer;