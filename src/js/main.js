import "../css/normalize.css"
import "../css/main.css"

document.addEventListener('DOMContentLoaded',() => {
    const grid = document.querySelector('.grid');
    const scoreDisplay = document.querySelector('.score');
    const width = 28;
    let squares = [];
    let score = 0;

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ];

//legend
// 0 packman, 1 wall, 2 ghost lair, 3 power pellet 4 empty

    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div');
            grid.appendChild(square);
            squares.push(square);

            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot');
            } else if (layout[i] === 1) {
                squares[i].classList.add('wall');
            } else if (layout[i] === 3) {
                squares[i].classList.add('power-pellet');
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair');
            }
        }
    }

    createBoard();

    let packmanCurrentIndex = 490;
    squares[packmanCurrentIndex].classList.add('pack-man');

    let blinkyCurrentIndex = 348;
    squares[blinkyCurrentIndex].classList.add('blinky');

    //coord of packman and blinky
    function getCoordinates(index) {
        return [index % width,Math.floor(index / width)];
    }

    function moveBlinky() {
        const directions = [-1,+1,+width,-width];
        let direction = directions[Math.floor(Math.random() * directions.length)];
        let ghostTimerId = NaN;

        ghostTimerId = setInterval(function () {
            if(!squares[blinkyCurrentIndex + direction].classList.contains('wall')) {
                squares[blinkyCurrentIndex].classList.remove('blinky');

                //check if is close to packman
                const [blX, blY] = getCoordinates(blinkyCurrentIndex);
                const [pacX,pacY] = getCoordinates(packmanCurrentIndex);
                const [blNewX,blNewY] = getCoordinates(blinkyCurrentIndex + direction)


                function isXCoordCloser() {
                    return (blNewX - pacX) > (blX - pacX);
                }

                function isYCoordCloser() {
                    return (blNewY - pacY) > (blY - pacY);
                }

                if(isXCoordCloser() || isYCoordCloser()) {
                    blinkyCurrentIndex += direction;
                    squares[blinkyCurrentIndex].classList.add('blinky');
                } else {
                    squares[blinkyCurrentIndex].classList.add('blinky');
                    direction = directions[Math.floor(Math.random() * directions.length)]
                }

                squares[blinkyCurrentIndex].classList.add('blinky');
            } else {
                direction = directions[Math.floor(Math.random() * directions.length)];
            }

            if(squares[blinkyCurrentIndex].classList.contains('pack-man')) {
                clearInterval(ghostTimerId);
            }
        },300);
    }

    moveBlinky();

    function movePackMan(e) {
        squares[packmanCurrentIndex].classList.remove('pack-man');

        switch (e.code) {
            case 'ArrowLeft':
                if (packmanCurrentIndex % width !== 0 &&
                    !squares[packmanCurrentIndex - 1].classList.contains('wall') &&
                    !squares[packmanCurrentIndex - 1].classList.contains('ghost-lair')) {
                    packmanCurrentIndex -= 1;
                }

                //check for exit
                if ((packmanCurrentIndex - 1) === 363) {
                    packmanCurrentIndex = 391;
                    squares[364].classList.remove('pack-man');
                }

                break;
            case 'ArrowUp':
                if (packmanCurrentIndex - width >= 0 &&
                    !squares[packmanCurrentIndex - width].classList.contains('wall') &&
                    !squares[packmanCurrentIndex - width].classList.contains('ghost-lair')) {
                    packmanCurrentIndex -= width;
                }
                break;
            case 'ArrowRight':
                if (packmanCurrentIndex % width < width - 1 &&
                    !squares[packmanCurrentIndex + 1].classList.contains('wall') &&
                    !squares[packmanCurrentIndex + 1].classList.contains('ghost-lair')) {
                    packmanCurrentIndex += 1;
                }

                //check for exit
                if (packmanCurrentIndex + 1 === 392) {
                    packmanCurrentIndex = 364;
                    squares[391].classList.remove('pack-man');
                }

                break;
            case 'ArrowDown':
                if (packmanCurrentIndex + width < width * width &&
                    !squares[packmanCurrentIndex + width].classList.contains('wall') &&
                    !squares[packmanCurrentIndex + width].classList.contains('ghost-lair')) {
                    packmanCurrentIndex += width;
                }
                break;
        }

        squares[packmanCurrentIndex].classList.add('pack-man');
        packDotEaten();
        powerPelletEaten();
        checkForGameOver();
        checkForWin();

    }

    document.addEventListener('keyup', movePackMan);

    function packDotEaten() {
        if (squares[packmanCurrentIndex].classList.contains('pac-dot')) {
            score++;
            scoreDisplay.innerHTML = `${score}`;
            squares[packmanCurrentIndex].classList.remove('pac-dot');
        }
    }

    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className;
            this.startIndex = startIndex;
            this.speed = speed;
            this.currentIndex = startIndex
            this.timerId = NaN;
            this.isScared = false;
        }
    }

    let ghosts = [
        //new Ghost('blinky', 348, 250),
        new Ghost('pinky', 376, 400),
        new Ghost('inky', 351, 400),
        new Ghost('clyde', 379, 500),
    ]

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className);
        squares[ghost.currentIndex].classList.add('ghost');
    })

    ghosts.forEach(ghost => moveGhost(ghost));

    function moveGhost(ghost) {
        const directions =  [-1, +1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(function() {
            //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
            if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
                !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
                //remove the ghosts classes
                squares[ghost.currentIndex].classList.remove(ghost.className)
                squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
                //move into that space
                ghost.currentIndex += direction
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
                //else find a new random direction ot go in
            } else direction = directions[Math.floor(Math.random() * directions.length)]

            //if the ghost is currently scared
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }

            //if the ghost is currently scared and pacman is on it
            if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex = ghost.startIndex
                score +=100
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
            }
            checkForGameOver()
        }, ghost.speed)
    }

    function checkForGameOver() {
        if(squares[packmanCurrentIndex].classList.contains('ghost') && !squares[packmanCurrentIndex].classList.contains('scared-ghost')) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup',movePackMan);
            setTimeout(function (){alert('Game Over')},500)
        }
    }

    function checkForWin() {
        if(score === 274) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup',movePackMan);
            alert('You won');
        }
    }

    function powerPelletEaten() {
        if(squares[packmanCurrentIndex].classList.contains('power-pellet')) {
            score += 10;
            ghosts.forEach(ghost =>ghost.isScared = true);
            setTimeout(unScareGhosts,10000);
            squares[packmanCurrentIndex].classList.remove('power-pellet');
        }
    }

    function unScareGhosts() {
        ghosts.forEach(ghost => ghost.isScared = false);
    }
});