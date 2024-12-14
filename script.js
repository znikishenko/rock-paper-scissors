
const buttons = document.querySelectorAll('.play');
let win = parseInt(localStorage.getItem('win')) || 0;
let loose = parseInt(localStorage.getItem('loose')) || 0;
let draw = parseInt(localStorage.getItem('draw')) || 0;

let winCount = document.getElementById('winCount');
let loseCount = document.getElementById('loseCount');
let drawCount = document.getElementById('drawCount');



winCount.textContent = win;
loseCount.textContent = loose;
drawCount.textContent = draw;

buttons.forEach(button => {
    const combinations = ['Rock', 'Paper', 'Scissors'];
    button.addEventListener('click', function () {
        const random = Math.floor(Math.random() * combinations.length);
        const randomComb = combinations[random];
        console.log('Computer chose:', randomComb);

        if (randomComb === button.textContent) {
            draw += 1;
            localStorage.setItem('draw', draw);
            drawCount.textContent = draw; 
            console.log('Result: Draw');
        } else if (
            (randomComb === 'Scissors' && button.textContent === 'Rock') ||
            (randomComb === 'Paper' && button.textContent === 'Scissors') ||
            (randomComb === 'Rock' && button.textContent === 'Paper')
        ) {
            win += 1;
            localStorage.setItem('win', win);
            winCount.textContent = win; 
            console.log('Result: Win');
        } else {
            loose += 1;
            localStorage.setItem('loose', loose);
            loseCount.textContent = loose; 
            console.log('Result: Lose');
        }
    });
});

resetButton.addEventListener('click', () => {
    win = 0;
    loose = 0;
    draw = 0;

    
    localStorage.setItem('win', win);
    localStorage.setItem('loose', loose);
    localStorage.setItem('draw', draw);

    
    winCount.textContent = win;
    loseCount.textContent = loose;
    drawCount.textContent = draw;

    console.log('Scores reset to 0.');
});
