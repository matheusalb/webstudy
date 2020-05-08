import React, { Component } from 'react'
import './Display.css'

export default class Display extends Component {
    state = {
        value: this.props.value
    }
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div className="display" type={this.props.type}>
                <p>{this.props.value}</p>
            </div>
        )
    }
};
