
// Chiedo all'utente il suo nome
const userName = prompt("Hey, come ti chiami?");

// lo chiamo per nome e gli chiedo di scegliere pari o dispari
const oddEven = prompt(`Ciao ${userName}, facciamo un gioco! Scegli pari o dispari`);
console.log(oddEven);

// lo richiamo per nome e gli mostro cosa ha scelto ora però gli chiedo di scegliere un numero da 1 a 5
const userNumber = parseInt(prompt(`Benissimo ${userName} hai scelto ${oddEven}, ora scegli un numero da 1 a 5`));
console.log(userNumber);


// genero numero random per il pc
const computerNumber = Math.floor(Math.random() * 5) + 1;
console.log(computerNumber); 

// somma del numero utente più numero del computer generato random
const sum = userNumber + computerNumber;
console.log(sum);

if (sum % 2 == 1 && oddEven == 'dispari') {
    console.log ("Complimenti, hai vinto")
} else if (sum % 2 == 0 && oddEven == 'pari')  {
    console.log ("Complimenti, hai vinto")
} else {
    console.log ("Mannaggia hai perso!")
}

