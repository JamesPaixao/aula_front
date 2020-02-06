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

function calcular_media(){
    
    const $nome = document.getElementById('nome');
    const $nota1 = document.getElementById('nota1');
    const $nota2 = document.getElementById('nota2');
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');
    const media = (parseInt($nota1.value) + parseInt($nota2.value))/2;
    if(media >= 5){
        $situacao.value = "Aprovado";
        $situacao.classList.add('aprovado');
        // $situacao.style.color = 'green';
        $nome.style.backgroundColor = 'green';
    }
    else{
        $situacao.value = "Reprovado";
        $situacao.classList.add('reprovado');
        // $situacao.style.color = 'red';
        $nome.style.backgroundColor = 'red';
    }
    $media.value = media;
    console.log($nome.value, $nota1.value, $nota2.value);
}
const $calcular = document.getElementById('botao_media');
$calcular.addEventListener('click', calcular_media);