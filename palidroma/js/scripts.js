/*
Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento! 

1. Creare la funzione che ci consenta di capire se una parola sia palidroma
2. Chiedere all'utente di inserire una parola
3. Verificare se la parola sia palindroma 
4. Scrivere il risultato
*/

function palindrom(word) {

      for(i = 0; i < input.length / 2; i++) {

            if(input[i] != input[input.length - 1 - i]) {

                  return alert('Parola o numero NON palindromo');

            }
            
      }

      alert('Parola o numero palindromo');
      
}

const input = prompt('Inserisci una parola o numero per sapere se è palindroma');

const output = palindrom(input);
console.log(output);
