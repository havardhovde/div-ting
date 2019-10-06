import React from 'react'
import { View, Text } from "react-native"

import Styles from "./Styles"
import Buttons from "./Buttons"

const CalcButtons = [
    ["C", "CE", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, "+/-", ".", "="]
  ]

export default class Calculator extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null
        }
    }

    render() {
        return (
            <View style={Styles.Container}>
                <View style={Styles.Display}>
                    <Text style={Styles.DisplayText}>{this.state.inputValue}</Text>
                </View>
                <View style={Styles.Input}>
                    {this._renderCalcButtons()}
                </View>
            </View>
        )
    }

    _renderCalcButtons() {
        let views = [];
        
        for(let r = 0; r < CalcButtons.length; r++) {
            let row = CalcButtons[r];
            
            let inputRow = [];
                for(let i = 0; i < row.length; i++) {
                    let input = row[i];

                    inputRow.push (
                        <Buttons
                            value={input}
                            highlight={this.state.selectedSymbol === input}
                            onPress={this._onInputButtonPressed.bind(this, input)} 
                            key={r + "-" + i} 
                        />
                    );
                }
                views.push(<View style={Styles.inputRow} key={"row-" + r}>{inputRow}</View>)
        }
        return views;

    }

    _onInputButtonPressed(input) {
        switch (typeof input) {
            case "number":
                return this._handleNumberInput(input)
            case "string":
                return this._handleStringInput(input)
        }
    }

    _handleNumberInput(num) {
        this.setState({
            inputValue: this.state.isDecimal ? eval(this.state.currentInputValue + this.state.selectedSymbol + num) : this.state.inputValue * 10 + num,
            currentInputValue: this.state.isDecimal ? 0 : this.state.inputValue * 10 + num,
            connectValue: null,
            displayedValue: null,
            isDecimal: null
        })
    }

    _handleStringInput(str) {
        switch(str) {
            case "/":
            case "*":
            case "-":
            case "+":
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0,

                });
                break;

            case "%":
                this.setState({
                    inputValue: this.state.inputValue / 100
                });
                break;

            case "=": {
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null
                });
            }
                break;
            
            case ".":
                    this.setState({
                        isDecimal: true,
                        selectedSymbol: str,
                        previousInputvalue: this.state.inputValue
                    });
                break;

            case "+/-":
                    this.setState({
                        inputValue: -Math.abs(this.state.currentInputValue),
                        currentInputValue: -Math.abs(this.state.currentInputValue)
                    })
                break;

            
            case "C":
            //Fjerner siste input
                this.setState({inputValue: 0})
                break;

            case 'CE':
            //Fjerner alt
                this.setState({
                inputValue: 0,
                connectValue: null,
                displayedValue: null
                });
                break;
            }
        }
    }