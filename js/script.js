console.log('JS OK!');

/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali 
dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

let i = 0;

let randomNumber = 0;

let numbersArray = [];

let guessNumbersArray = [];

const numberGeneratorButton = document.getElementById('num-generator');

const rndNumbersArea = document.getElementById('num-area');


numberGeneratorButton.addEventListener('click',
    function () {

        rndNumbersArea.innerHTML = '';

        // genera 5 numeri casuali tra 1 e 10
        for (i = 1; i <= 5; i++) {

            randomNumber = Math.floor(Math.random() * 10) + 1;

            numbersArray.push(randomNumber);

            rndNumbersArea.innerHTML += '<div>' + randomNumber + '</div>';
        }

        console.log('The randomly generated numbers are: ', numbersArray);

        // timer di 30 secondi alla fine del quale i numeri generati spariscono
        setTimeout(numberVanish, 2000);

        setTimeout(numberCheck, 2050);
    })



// FUNCTIONS

function numberVanish() {
    rndNumbersArea.classList.add('d-none');

    console.log('Numbers vanishing!');
}

function numberCheck() {
    console.log('Do you remember all numbers?');

    // for (i = 1; i <= 5; i++) {
    //     let guessNumber = 0;
    //     guessNumber = parseInt(prompt('Type the ' + i + '° number!'));

    //     if (numbersArray.includes(guessNumber)) {
    //         guessNumbersArray.push(guessNumber);
    //     } else { }
    // }

    let j = 1;

    let guessNumber = 0;

    while (j <= 5) {
        guessNumber = parseInt(prompt('Type the ' + j + '° number!'));

        if (isNaN(guessNumber) || guessNumber === undefined) {

            alert('You must type a number!');

        } if (!isNaN(guessNumber) && guessNumber !== undefined && numbersArray.includes(guessNumber)) {

            guessNumbersArray.push(guessNumber);

            j++;

        } if (!isNaN(guessNumber) && guessNumber !== undefined && !numbersArray.includes(guessNumber)) {

            j++;
        }
    }

    console.log('You guessed right ' + guessNumbersArray.length + ' numbers! They are: ' + guessNumbersArray);

    console.log('');

    rndNumbersArea.innerHTML = ('You guessed right ' + guessNumbersArray.length + ' number(s)! They are: ' + guessNumbersArray);

    numbersArray = [];

    guessNumbersArray = [];

    rndNumbersArea.classList.remove('d-none');
}