import React, { Component } from 'react'
import './Display.css'

export default class Display extends Component {
    state = {
        value: this.props.value
    }
    constructor(props) {
        super(props)

        this.setValue = this.setValue.bind(this)
    }

    setValue(e) {
        this.setState({value: 'valor aqui'})
    }

    render() {
        return (
            <div className="display" type={this.props.type}>
                <p>{this.props.value}</p>
            </div>
        )
    }
};
