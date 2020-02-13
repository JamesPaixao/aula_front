// function msg () {
//     if(true){
//         nome = "James";
//     }
// }

// alert(nome);
// let nome = "James";
// const idade = 19;
// const teste = true;
// const produto = {produto: "mouse", quantidade:"45"};
// const somar = () => 3 + 3;

// console.log(typeof (nome));
// console.log(typeof (idade));
// console.log(typeof (teste));
// console.log(typeof (produto));
// console.log(typeof (somar));

// const cidade = "Itapevi";
// const estado = 'São Paulo';
// const pais = `BR $(estado)`;

// console.log("Minha cidade é: ", cidade);
// console.log('Estado: ', estado);

// let nota1 = 8;
// let nota2 = 8;
// console.log(nota1++);
// console.log(nota1);
// console.log(++nota2);

// nota1 += 1;
// nome += "Paixão";
// console.log(nome);
// alert($nome);
// const $nome = document.querySelector("input[type: text]"

const $exibir = document.querySelector('.exibir');
const $container = document.querySelector('.container');
const $ocultar = document.querySelector('.ocultar');

const calcular_media = (n1,n2) => (parseInt(n1) + parseInt(n2)) / 2;

const verifica_situacao = (media) => media >=5 ? "Aprovado" : "Reprovado";

const exibe_media = () =>{
    const $nome = document.getElementById('nome');
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');
    
    const media = calcular_media (nota1, nota2);

    $situacao.value = verifica_situacao (media);
    
    // if(media >= 5){
    //     $situacao.value = "Aprovado";
    //     $situacao.classList.add('aprovado');
    //     // $situacao.style.color = 'green';
    //     $nome.style.backgroundColor = 'green';
    // }
    // else{
    //     $situacao.value = "Reprovado";
    //     $situacao.classList.add('reprovado');
    //     // $situacao.style.color = 'red';
    //     $nome.style.backgroundColor = 'red';
    // }
    $media.value = media;
    console.log($nome.value, $nota1.value, $nota2.value);
}

const calcular_conceito = () => {
    const media = document.getElementById('media').value;
    const $conceito = document.getElementById('conceito');
    if(media < 0){
        $conceito.value = "Nota inválida";
    }
    else if(media == 0 || media < 3){
        $conceito.value = "E";
    }
    else if(media < 5){
        $conceito.value = "D";
    }
    else if(media < 8){
        $conceito.value = "C";
    }
    else if(media < 10){
        $conceito.value = "B";
    }
    else if(media == 10){
        $conceito.value = "A";
    }
    else{
        $conceito.value = "Nota inválida";
    }
}

const calcular = () => {
    exibe_media();
    calcular_conceito();
}
const exibir = (el) => el.classList.add ('exibir');
const ocultar = (el) => el.classList.remove ('exibir');


// function soma ( a, b){
//     return a + b;
// }

// const soma2 = ( a, b) => a + b;

// const quadrado = a => a * a;

// function () {       |
//     return 2 + 2;   | Jeito antigo de escrever uma função
// }                   |

const $calcular = document.getElementById('botao_media');
$calcular.addEventListener('click', calcular);
$exibir.addEventListener('click', () => exibir ($container));
$ocultar.addEventListener('click', () => ocultar ($container));