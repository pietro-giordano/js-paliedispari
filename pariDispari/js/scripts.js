/*
Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento! 

1. Funzione per numero casuale da 1 a 5 per pc
2. Funzione che stabilisce se la somma tra due numeri dia numero pari o dispari
3. Chiediamo all'utente se sceglie pari o dispari
4. Gli chiediamo di scrivere un numero da 1 a 5
5. Sommiamo numero utente e numero casuale pc
6. Stabiliamo se la somma è pari o dispari
7. Dichiariamo il vincitore
*/
//Funzione numero random
function rndmNmbr(min, max) {

      const pcNmbr = Math.floor(Math.random() * (max - min + 1)) +min;
      return pcNmbr;

}

//Funzione pariDispari
function oddEven(num1, num2) {

      if((num1 +num2) % 2 == 0) {

            return 'pari';

      } else {

            return 'dispari';

      }

}

//Inizio programma
const userSelect = parseInt(prompt('Scegli tra:\n 1>pari\n 2>dispari'));

if(isNaN(userSelect) || userSelect < 1 || userSelect > 2) {

      alert('Attenzione valore non valido');
      window.location.reload();

} else {

      const userNumber = parseInt(prompt('Inserisci numero da 1 a 5'));
      
      if (isNaN(userNumber) || userNumber <= 0 || userNumber > 5) {
      
            alert('Attenzione valore non valido');
            window.location.reload();
      
      } else {

            const pcNumber = rndmNmbr(1, 5);
            alert('Pc sceglie ' + pcNumber);
            
            const result = oddEven(userNumber, pcNumber);
            
            if(userSelect == 1) {
            
                  if(result == 'pari') {
                  
                        alert('Hai vinto!! La somma dei due numeri è pari');
                  
                  } else {
                  
                        alert('Hai perso!! La somma dei due numeri è dispari');
                  
                  }
            
            } else if(userSelect == 2) {
            
                  if (result == 'pari') {
            
                        alert('Hai perso!! La somma dei due numeri è pari');
            
                  } else {
            
                        alert('Hai vinto!! La somma dei due numeri è dispari');
            
                  }
            
            }

      }

}


