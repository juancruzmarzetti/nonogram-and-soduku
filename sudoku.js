/* SUDOKU
Aleatoriedad en base al Algoritmo de Fisher-Yates:
Randomness according to the Fisher-Yates algorithm: */

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
};

function crearMatriz3x3(){
    let matriz3x3 = [[], [], []];
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    shuffle(numeros);
    for(let i = 0; i < 9; i++){
        if(i <= 2){
            matriz3x3[0].push(numeros[i]);
        }else if(i <= 5){
            matriz3x3[1].push(numeros[i]);
        }else{
            matriz3x3[2].push(numeros[i]);
        }
    }
    return matriz3x3;
}

function crearSudoku(){
    let matrizSudoku = [[], [], [], [], [], [], [], [], []];
    for(let i = 0; i < 9; i++){
        let temp = crearMatriz3x3();
        matrizSudoku[i].push(temp);
    };
    return matrizSudoku;
};

const sudoku = crearSudoku();