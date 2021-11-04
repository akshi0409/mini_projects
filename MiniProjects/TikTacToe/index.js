document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const dispcurrentplayer = document.getElementById('current-player');
    const squares = document.querySelectorAll('.grid div');
    const gridbox = document.querySelector('.grid');
    const reset = document.getElementById('reset');
    var x = 0;
    let currentplayer = 1;
    const winningArrays = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    board();



    function board() {
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]]
            const square2 = squares[winningArrays[y][1]]
            const square3 = squares[winningArrays[y][2]]
            if (square1.classList.contains('player-one') &&
                square2.classList.contains('player-one') &&
                square3.classList.contains('player-one')
            ) {
                result.innerHTML = 'Player One Wins!'
                gridbox.style.display = "none";
            }
            if (
                square1.classList.contains('player-two') &&
                square2.classList.contains('player-two') &&
                square3.classList.contains('player-two')
            ) {
                result.innerHTML = 'Player Two Wins!';
                gridbox.style.display = "none";
            }
        }
        reset.onclick = () => {
            location.reload()
        }
        for (let i = 0; i < squares.length; i++) {
            squares[i].onclick = () => {
                x++;
                if (!squares[i].classList.contains('taken')) {
                    if (currentplayer == 1) {
                        squares[i].classList.add('taken');
                        squares[i].classList.add('player-one');
                        currentplayer = 2;
                        squares[i].innerHTML = 'O';
                        dispcurrentplayer.innerHTML = currentplayer;
                    } else {
                        squares[i].classList.add('taken');
                        squares[i].classList.add('player-two');
                        currentplayer = 1;
                        squares[i].innerHTML = 'X';
                        dispcurrentplayer.innerHTML = currentplayer;
                    }
                } else alert('you cannot go there');
                board();
            }

        }
        if ((result.innerHTML == '') && (x == 9)) result.innerHTML = 'Tie';
    }
})