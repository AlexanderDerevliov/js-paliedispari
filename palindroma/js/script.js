// Chiedere all'utente di inserire una parola

// creare la funzione che determina se quella parola è palindroma oppure non lo è


// chiedo all'utente di inserire la parola
let userWord = (prompt ("Inserici la tua parola e verifico se è palindroma oppure no!"));
console.log(userWord);

// la parola palindroma è uguale a quella inserita dall'utente?
let palindromWord = parolaPalindroma (userWord);

// se è uguale alla parola dell'utentes - stampo che la parola è palindroma
if (palindromWord == userWord) {
    console.log("La Parola è palindroma");

// altrimenti stampo che la parola non è palindroma
} else {
    console.log("La Parola non è palindroma");
}

console.log(userWord);
console.log(palindromWord)

// la funzione creata per determinare se è o non è la parola palindroma


function parolaPalindroma (string) {

    // divido la stringa in singole lettere
    const parolaSplit = string.split("");
    console.log (parolaSplit);
    
    // inverto l'ordine delle lettere
    const parolaInvert = parolaSplit.reverse();
    console.log (parolaInvert);
    
    // unisco le lettere in una stringa
    const parolaJoin = parolaInvert.join("");

    return parolaJoin;
}