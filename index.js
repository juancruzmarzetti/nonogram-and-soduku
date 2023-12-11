//NONOGRAM

function getRandomBoolean() {
    let trueOrFalse;
    let temp = Math.floor(Math.random() * 2);
    trueOrFalse = temp === 0 ? false : true;
    return trueOrFalse;
};

function getMatrizBinariosRandom(x){
    let matriz = [];
    for(i = 0; i < x; i++){
        let temp = [];
        matriz.push(temp);
        for(j = 0; j < x; j++){
            let randomBoolean = getRandomBoolean();
            matriz[i].push(randomBoolean);
        };
        if (!temp.includes(true)) {
            let randomIndex = Math.floor(Math.random() * x);
            temp[randomIndex] = true;
        }
    };
    for (let i = 0; i < x; i++) {
        let columna = matriz.map(row => row[i]);
        if (!columna.includes(true)) {
            let randomIndex = Math.floor(Math.random() * x);
            matriz[randomIndex][i] = true;
        }
    }
    return matriz;
};

function calcularContadores(matrizAContar){
    let arrayColumnas = [];
    let arrayFilas = [];
    for(i = 0; i < matrizAContar.length; i++){
        let contadorColumnas = 0;
        for(j = 0; j < matrizAContar.length; j++){
            if(matrizAContar[j][i] === true){
                contadorColumnas++;
            };
        };
        arrayColumnas.push(contadorColumnas);
        let contadorFilas = 0;
        for(j = 0; j < matrizAContar.length; j++){
            if(matrizAContar[i][j] === true){
                contadorFilas++;
            };
        };
        arrayFilas.push(contadorFilas);
    };
    for(i = 0; i < matrizAContar.length; i++){
        let temp = arrayFilas[i];
        matrizAContar[i].push(temp);
    };
    matrizAContar.push(arrayColumnas);
    return matrizAContar;
};

let matriz = getMatrizBinariosRandom(4);
calcularContadores(matriz);
console.table(matriz);