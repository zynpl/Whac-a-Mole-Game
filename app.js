const squares= document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
const timeLeft= document.querySelector('#time-left')
const score=document.querySelector('#score')

let result=0
let hitPosition
let timerId=null
let currentTime=60

function randomSquare(){

    squares.forEach(square => {
        square.classList.remove('mole')
    })
    // let randomPosition=squares[Math.random()*9]
    let randomSquare=squares[Math.floor(Math.random()*squares.length)] //or 9 cause there is 9 boxes 
    randomSquare.classList.add('mole')

    hitPosition=randomSquare.id

}

squares.forEach(square => {
    square.addEventListener('mousedown', ()=> {
        if (square.id==hitPosition) {
            result++
            score.textContent=result
            hitPosition=null
        }
    })
})


function moveMole(){
    timerId=setInterval(randomSquare, 1000)
}

// randomSquare()
moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent=currentTime

    if (currentTime==0) {
        clearInterval(countDowntimerId)
        clearInterval(timerId)
        alert("Time Is Over, Final score: "+result )
    }
    
}

let countDowntimerId=setInterval(countDown,1000)