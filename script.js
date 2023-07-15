//create a N x N grid of square divs 
document.addEventListener('DOMContentLoaded', function() {
    let size = 4
    createBoard(size)

function createBoard(size) {
    const board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let divNum = size * size

    for (let i = 0; i < divNum; i++) {
        var div = document.createElement("div");
        div.classList.add('box');
        board.insertAdjacentElement("beforeend", div);
    }

}
});


