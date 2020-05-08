import React, { Component } from 'react'
import './Calculator.css'
import '../components/Button'
import {getChildren} from '../utils/utils'
import Button from '../components/Button'
import Display from '../components/Display'


export default class Calculator extends Component {
    state = {
        display: this.props.value,
        x: 0.,
        y: 0.,
        operation: null,
        resulted: false,
        clearDisplay: false,
        changeop: false
    }

    updateDisplay(value) {
        if (value !== '.'){
            if(this.state.display === '0')
                this.state.display = value
            else this.state.display = this.state.display + value
        } else { 
            if(this.state.display === '0')
                this.state.display = '0' + value
            else {
                if(!this.state.display.search(".")){
                    this.state.display = this.state.display + value
                }
            }
        }
        console.log(this.state.display)
        
        this.showDisplay()
    }
    
    showDisplay() {
        document.querySelector('[type=display]').firstChild.innerHTML = this.state.display
    }

    cleanDisplay() {
        this.state.display = '0'
        this.updateDisplay(this.state.display)
    }

    cleanState() {
        this.state = {
            display: '0',
            x: null,
            y: 0,
            changeop: false
        }
    }

    cleanAll() {
        this.cleanDisplay()
        this.state = {
            display: '0',
            x: null,
            y: 0.,
            operation: null,
            resulted: false,
            clearDisplay: false
        }
    }

    operationClicked(operation) {
        if(!this.state.changeop){
            this.state.changeop = true
            if (!this.state.x){
                this.state.x = parseFloat(this.state.display)
            }
            else {
                this.operationEqual(false)
                this.state.x = this.state.display
            }
            this.state.clearDisplay = true
       } 
        this.state.operation = operation
       
    }

    digitClicked(value) {
        this.state.changeop = false
        if(this.state.clearDisplay) {
            this.cleanDisplay()
            this.state.clearDisplay = false
        }

        if (this.state.resulted === true){
            this.cleanDisplay()
            this.state.resulted = false
        }
        this.updateDisplay(value)
    }
    
    operationEqual(bol) {
        if(!this.state.operation) return

        console.log('salvou y ', parseFloat(this.state.display))
        this.state.y = parseFloat(this.state.display)

        switch(this.state.operation) {
            case '+': this.operationSum()
                break;
            case '-': this.operationSubtract()
                break;
            case '*': this.operationMultiply()
                break;
            case '/': this.operationDivide()
                break;
        }
        this.state.resulted = true
        if (bol) {
            this.state.operation = null
            this.state.turn = false
            this.state.x = null
        }
    }

    operationSum(){
        this.state.display = parseFloat((this.state.x + this.state.y).toFixed(7))
        this.showDisplay()
    }
    operationSubtract(){
        this.state.display = parseFloat((this.state.x - this.state.y).toFixed(7))
        this.showDisplay()
    }
    operationMultiply(){
        this.state.display = parseFloat((this.state.x * this.state.y).toFixed(7))
        this.showDisplay()
    }
    operationDivide(){
        this.state.display = parseFloat((this.state.x / this.state.y).toFixed(7))
        this.showDisplay()
    }

    render() {
        console.log(this.props)
        return (
            // referencia o nome da class como className, em vez de class como html faz
            // além que class é uma palavra reservada da linguagem
            // <div className="calculator">
            //     {getChildren(this.props)}
            // </div>
            <div className="calculator">
                <Display type="display" value="0"/>
                <Button type="digit" text="0" onClick={e => {this.digitClicked('0')}} />
                <Button type="digit" text="1" onClick={e => {this.digitClicked('1')}} />
                <Button type="digit" text="2" onClick={e => {this.digitClicked('2')}} />
                <Button type="digit" text="3" onClick={e => {this.digitClicked('3')}} />
                <Button type="digit" text="4" onClick={e => {this.digitClicked('4')}} />
                <Button type="digit" text="5" onClick={e => {this.digitClicked('5')}} />
                <Button type="digit" text="6" onClick={e => {this.digitClicked('6')}} />
                <Button type="digit" text="7" onClick={e => {this.digitClicked('7')}} />
                <Button type="digit" text="8" onClick={e => {this.digitClicked('8')}} />
                <Button type="digit" text="9" onClick={e => {this.digitClicked('9')}} />
                <Button type="digit" text="." onClick={e => {this.digitClicked('.')}} />
                <Button type="operation" text="+" onClick = {e=> this.operationClicked('+')}/>
                <Button type="operation" text="-" onClick = {e=> this.operationClicked('-')}/>
                <Button type="operation" text="*" onClick = {e=> this.operationClicked('*')}/>
                <Button type="operation" text="/" onClick = {e=> this.operationClicked('/')}/>
                <Button type="operation" text="=" onClick = {e=> this.operationEqual(true)}/>
                <Button type="option" text="AC" onClick={ e => this.cleanAll()}/>
            </div>
        )
    }
}