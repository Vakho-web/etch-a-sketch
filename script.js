//create a N x N grid of square divs 
document.addEventListener('DOMContentLoaded', function() {

    createBoard(16);
    
    const selectBtn = document.getElementById('sizeBtn');
    selectBtn.addEventListener('click', getSize);

    const message = document.getElementById('message')

    function getSize() {
        let input = prompt("Choose your size Min:1 / Max:100");
        if(input > 100 || input < 0) {
            message.innerText = 'Please choose the number from 1 to 100';
        } else if(isNaN(input)) {
            message.innerText = 'Please choose the number'
        } else {
            createBoard(input);
            message.innerText = 'You can draw';
        }
        
    }
    
function createBoard(size) {
    const board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let divNum = size * size

    for (let i = 0; i < divNum; i++) {
        let div = document.createElement("div");
        div.classList.add('box');
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = "black";
        });
        board.insertAdjacentElement("beforeend", div);
    }
}

const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', function() {
    const divs = document.querySelectorAll('div.box');
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    });
});

});


