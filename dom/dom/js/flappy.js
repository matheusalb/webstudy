document.querySelector('#start button').onclick = function (e) {
    document.querySelector('div.menu').style.display = 'none'
    document.querySelector('[wm-flappy]').style.display = 'flex'

    document.querySelector('#start button').setAttribute('started', 'true')
    // document.querySelector('#boneco').top = '50px'
}

const nElements = 50
const mapRandom = []
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(let i = 0; i < nElements; i++) mapRandom.push(randomIntFromInterval(180, 510))

const index = {
    _value: 0,
    get value() {
        if(this._value >= nElements) {
            this._value = 0
        }
        return this._value++
    }
}

document.querySelector('.cano').style.display = 'none'
document.querySelector('.cano').setAttribute('father', 'true')
let cano1 = document.querySelector('.cano').cloneNode(true)
let cano2 = document.querySelector('.cano').cloneNode(true)
cano1.style.display = 'flex'
cano2.style.display = 'flex'
let map = document.querySelector('[wm-flappy]')
map.appendChild(cano1)
// map.appendChild(cano2)


// andando com os canos
setInterval(() => {
    if(document.querySelector('#start button').getAttribute('started') === 'true') {
        // console.log('tamanho', document.querySelectorAll('.cano').length)
        document.querySelectorAll('.cano').forEach(e => {

            if(e.getAttribute('father') !== "true") {
                let positionX = e.style.left || 'calc('+window.getComputedStyle(e).getPropertyValue('left')+')'
                positionX = parseInt(positionX.substr(5, positionX.length - 1))

                e.style.left = `calc(${positionX}px - 1px)`
            }
        })
    }
}, 7);

// pontuacao
let score = 0
let insideElement = null

function verifyInside (e) {
    let cano = e
    let boneco = document.querySelector('#boneco')
    let bonecoStyle = window.getComputedStyle(boneco)
    let childrens = cano.children
    let canoSuperior = childrens[0]
    let vazio = childrens[1]
    let canoInferior = childrens [2]
    let canoStyle = window.getComputedStyle(cano)

    return (((parseInt(bonecoStyle.left) + boneco.clientWidth/*+ boneco.clientWidth/2*/ >= parseInt(canoStyle.left)) && 
    parseInt(bonecoStyle.left) /*- boneco.clientWidth/2*/ <= parseInt(canoStyle.left) + cano.clientWidth) &&
    ( (parseInt(bonecoStyle.top) /*- boneco.clientHeight/2*/ > parseInt(canoSuperior.style.flexBasis)) &&
    (parseInt(bonecoStyle.top) + boneco.clientHeight  /*+ boneco.clientHeight/2*/ < parseInt(canoSuperior.style.flexBasis) + parseInt(window.getComputedStyle(vazio).flexBasis))  
    )) 
}


function insideBox() {
    
    if (!insideElement) {
        document.querySelectorAll('.cano').forEach(e => {
            if(!insideElement && verifyInside(e)){
                insideElement = e
            }
        })
    } else {
        if(!verifyInside(insideElement)) {
            score++
            document.getElementById('score').innerHTML = `score: ${score}`
            console.log(score)
            insideElement = null
        }
    }
}

setInterval(() => {
    insideBox()
}, 7);


// botando e excluindo os canos 
setInterval(() => {
    if(document.querySelector('#start button').getAttribute('started') === 'true') {
        let cano = document.querySelector('[father="true"]').cloneNode(true)
        cano.setAttribute('father', 'false')
        cano.firstElementChild.style.flexBasis = `${mapRandom[index.value]}px`
        cano.style.display = 'flex'
        document.querySelector('[wm-flappy]').appendChild(cano)
        
        document.querySelectorAll('.cano').forEach(e => {
            let canoStyle = window.getComputedStyle(e)

            if (parseInt(e.left) <= -10) {
                document.querySelector('[wm-flappy').removeChild(e)
                console.log('removi')
            }
        })
    }

}, 3000);


// movimento pro boneco cair 
setInterval(() => {
    if(document.querySelector('#start button').getAttribute('started') === 'true') {
        let boneco = document.querySelector('#boneco')
        let positionY = boneco.style.top || 'calc(' +window.getComputedStyle(boneco).getPropertyValue('top')+')'
        // console.log(positionY)
        // console.log('caindo')
        positionY = parseInt(positionY.substr(5, positionY.length - 1))
        if(positionY < 110) boneco.style.top = `calc(${positionY}% + 1.5%)` 
        else boneco.style.top = 'calc(110%)'
    }
}, 50);

function isCollide(boneco, bonecoStyle, cano) {
    let childrens = cano.children
    let canoSuperior = childrens[0]
    let vazio = childrens[1]
    let canoInferior = childrens [2]
    let canoStyle = window.getComputedStyle(cano)

    // console.log('1. ', parseInt(bonecoStyle.left) + boneco.clientWidth >= parseInt(canoStyle.left), 
    //             '2. ', parseInt(bonecoStyle.left) <= parseInt(canoStyle.left),
    //             '3. ', parseInt(bonecoStyle.top) <= parseInt(canoSuperior.style.flexBasis),
    //             '4. ', parseInt(bonecoStyle.top) + boneco.clientHeight >= parseInt(canoSuperior.style.flexBasis) + parseInt(window.getComputedStyle(vazio).flexBasis)
    // )
    // console.log(parseInt(bonecoStyle.top) + boneco.clientHeight/2 >= parseInt(canoSuperior.style.flexBasis) + parseInt(window.getComputedStyle(vazio).flexBasis))
    // console.log(parseInt(bonecoStyle.top), boneco.clientHeight/2, parseInt(bonecoStyle.top) + boneco.clientHeight/2,  parseInt(canoSuperior.style.flexBasis))
    // console.log('cano width', cano.clientWidth)
    return ((parseInt(bonecoStyle.left) + boneco.clientWidth/*+ boneco.clientWidth/2*/ >= parseInt(canoStyle.left)) && 
            parseInt(bonecoStyle.left) /*- boneco.clientWidth/2*/ <= parseInt(canoStyle.left) + cano.clientWidth) &&
            ( (parseInt(bonecoStyle.top) /*- boneco.clientHeight/2*/ <= parseInt(canoSuperior.style.flexBasis)) ||
              (parseInt(bonecoStyle.top) + boneco.clientHeight  /*+ boneco.clientHeight/2*/ >= parseInt(canoSuperior.style.flexBasis) + parseInt(window.getComputedStyle(vazio).flexBasis))  
            )
    }
    
// Verifica colisão 
setInterval(() => {

    let boneco = document.querySelector('#boneco')
    let style = window.getComputedStyle(boneco)
    // console.log(style.x)
    document.querySelectorAll('.cano').forEach(e => {
        if(e.getAttribute('father') !== "true") {
            // console.log(boneco.getAttribute('width'))
            // console.log(boneco.clientWidth)
            if(isCollide(boneco, style, e)) {
                endGame()
            }
        }
    })
    
}, 20);




// movimento para subir
window.addEventListener('keypress', event => {
    if(document.querySelector('#start button').getAttribute('started') === 'true') {
        if(event.key === " ") {
            let boneco = document.querySelector('#boneco')
            let positionY = boneco.style.top || 'calc('+window.getComputedStyle(boneco).getPropertyValue('top')+')'
            positionY = parseInt(positionY.substr(5, positionY.length - 1))
            if(positionY > -13) boneco.style.top = `calc(${positionY}% - 7%)`  
            else boneco.style.top = 'calc(-13%)'
        }
    }
} ) 

function endGame() {
    document.querySelector('#start button').setAttribute('started', 'false')
    document.querySelector('[wm-flappy]').style.display = 'none'
    document.querySelector('[wm-endgame]').style.display = 'flex'

    document.getElementById('score-end').innerHTML = `Final Score: ${score}`
    document.querySelector('[wm-endgame] button').onclick = function (e) {
        document.querySelector('div.menu').style.display = 'none'
        document.querySelector('[wm-flappy]').style.display = 'flex'
    
        document.querySelector('#start button').setAttribute('started', 'true')
        // document.querySelector('#boneco').top = '50px'
    }
}