
var stick = 20;

class player {
    name;

    constructor(name) {
        this.name = name;
    }

    makeMove() {

        while (true) {

            var movePlayer = prompt("Ход игрока " + this.name + ":");
            if (movePlayer <= 3) {
                stick -= movePlayer;
                break;
            }
            else if (movePlayer > 3) {
                alert("Введите число от 1 до 3!");
            }
            else if (isNaN(movePlayer)) {
                alert("Введите число от 1 до 3!");
            }
        }
    }

}


    while (stick >= 0) {
        var nameOfPlayer1 = new player('Bob');
        var nameOfPlayer2 = new player('John');

        let i = nameOfPlayer1.makeMove();
        if (stick <= 0 ){

            alert(nameOfPlayer1.name + " winner!!! grac!!!");
            break;
        }

        console.log(i);

        console.log(stick);

        let j = nameOfPlayer2.makeMove();

        console.log(j);

        console.log(stick);
        if (stick <= 0 ){

            alert(nameOfPlayer2.name + " winner!!! grac!!!");
            break;
        }
    }


