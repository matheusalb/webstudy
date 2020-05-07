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
        turn: false,
        resulted: false
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
            x: 0,
            y: 0,
            turn: false
        }
    }

    cleanAll() {
        this.cleanDisplay()

    }

    operationClicked(operation) {
        if (!this.state.turn) { 
            this.state.x = parseFloat(this.state.display)
            console.log('x ', this.state.x )
            this.state.turn = !this.state.turn
            this.state.operation = operation 
            this.cleanDisplay()
        } else {
            this.state.turn = !this.state.turn
            this.state.y = parseFloat(this.state.display)
            console.log('y', this.state.y)
            this.operationEqual()
            this.state.operation = operation
            // this.cleanDisplay()
            // this.state.y  = this.state.display
        }
    }

    digitClicked(value) {
        if (this.state.resulted === true){
            this.cleanDisplay()
            this.state.resulted = false
        }
        this.updateDisplay(value)
    }
    
    operationEqual() {
        if(!this.state.operation) return
        if(this.state.turn === true) {
            // nao foi atualizada
            this.state.y = parseFloat(this.state.display)
        }

        this.state.turn = false
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
    }

    operationSum(){
        this.state.display = this.state.x + this.state.y
        this.showDisplay()
    }
    operationSubtract(){
        this.state.display = this.state.x - this.state.y
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
                <Button type="operation" text="=" onClick = {e=> this.operationEqual()}/>
                <Button type="option" text="AC" onClick={ e => this.cleanAll()}/>
            </div>
        )
    }
}