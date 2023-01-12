const notas = [20, 30, 40, 5.5];

let somaDasNotas = 0;

 notas.forEach(function (nota, indice) {
    console.log(indice);  
    somaDasNotas += nota;
 });

 const media = somaDasNotas / notas.length;

 console.log(`A média das notas é ${media}.`);
