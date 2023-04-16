/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esempio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/


/* snack 1 */

const arrayBici = [

    {
      nome : "Bianchi",
      peso : 10
    },
  
    {
      nome : "Tomassini",
      peso : 15
    },
  
    {
      nome : "Atala",
      peso : 5
    },
  
    {
      nome : "Graziella",
      peso : 3
    }
  
]

const { nome, peso } = arrayBici[3]
  
console.log( nome, peso )
  
document.getElementById("biciLight").innerHTML = `La bici più leggera è: ${nome} con un peso di ${peso}kg `


/* snack 2 */


let squadreCalcio = [

  {
    squadra : "Fiorentina",
    punti : 0,
    falli : 0
  },

  {
    squadra : "Lecce",
    punti : 0,
    falli : 0
  },

  {
    squadra : "Udinese",
    punti : 0,
    falli : 0
  },

  {
    squadra : "Atalanta",
    punti : 0,
    falli : 0
  }

]

function cpuNumberGenerator( min, max ){

  return Math.floor(Math.random() * (max - min + 1) + min);
};

let arraySquadraFalli = []

squadreCalcio.forEach( element => {

  element.punti = cpuNumberGenerator( 1, 100 )

  element.falli = cpuNumberGenerator( 1, 100 ) 

  arraySquadraFalli.push(element.squadra, element.falli)

})

console.log(squadreCalcio)

console.log(arraySquadraFalli)