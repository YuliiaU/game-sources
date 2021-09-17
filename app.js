const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors=['#CD5C5C','#DC143C','#8B0000','#C71585','#FFFF00','#FF4500','#00FF00','#00FA9A','#008000','#20B2AA','#4682B4','#00CED1','#F5F5DC']
let time = 0
let score=0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
          screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})


function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
          let curent = --time
    if (curent < 10) {
        curent=`0${curent}`
    }
     setTime(curent) 
    }
}

function setTime(value) {
    timeEl.innerHTML=`00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML=`<h1>Cчет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
  
    const size = getRandomNumber(10, 60)
    const {width,height}=board.getBoundingClientRect()
    const x=getRandomNumber(0,width-size)
    const y = getRandomNumber(0, height - size)
    const randColor = colors[Math.floor(Math.random() * colors.length)]
    
 
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = randColor
    circle.style.boxShadow=`0 0 2px ${randColor},0 0 10px ${randColor}`
    
    board.append(circle)
}

function getRandomNumber(min,max) {
    return Math.round(Math.random()*(max-min)+min)
}





