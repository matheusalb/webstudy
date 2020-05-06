import React from 'react'
import ReactDOM from 'react-dom'
// Componente criado tem que ter a letra MAIÚSCULA
// import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

import Multi, {BoaNoite} from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
// ReactDOM.render(<BomDia nome="tilba" idade={21}/>, document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana"></Multi.BoaTarde>
//         <BoaNoite nome="Bia"></BoaNoite>
//     </div>
// , document.getElementById('root'))

// ReactDOM.render (
//     <div>
//         <Saudacao tipo="Bom Dia" nome="João" />
//     </div>
// , document.getElementById('root'))


ReactDOM.render (
    <div>
        <Pai nome="Matheus" sobrenome="Viana">
            <Filho nome="Julia" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" /> 
        </Pai>
    </div>
, document.getElementById('root'))

// $('<h1>').html('React 2')