import React from 'react'

export function getChildren(props) {
    return props.children
};

export function insertDigitsAttribute() {
    document.querySelectorAll('[type=digit]').forEach(element => {
        if(element.innerHTML !== ".") element.style.gridArea = 'digit' + element.innerHTML
        else element.style.gridArea = 'digitdot'
    })
    document.querySelectorAll('[type=display]').forEach(element => {
        element.style.gridArea = 'display'
    })
    document.querySelectorAll('[type=operation]').forEach(element => {
        switch(element.innerHTML) {
            case '+':
                element.style.gridArea = 'operationsm'
                break;
            case '-':
                element.style.gridArea = 'operations'
                break;
            case '*':
                element.style.gridArea = 'operationm'
                break;
            case '/':
                element.style.gridArea = 'operationd'
                break;
            case '=':
                element.style.gridArea = 'operationeq'
                break;
        }
    })
    document.querySelectorAll('[type=option]').forEach(element => {
        element.style.gridArea = 'option'
    })
}