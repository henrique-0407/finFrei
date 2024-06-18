import prompt from 'prompt-sync';
let ler = prompt();


export function decisao(){
    console.clear;
    console.log();
    console.log(`digite o que você irá fazer no programa
    1.depositar
    2.sacar
    3.exibirSaldo
    
    para sair digite Sair`);
    
    let decisao = Number(ler());
    if(decisao != 1 && decisao != 2 &&decisao != 3 ){
        decisao = 'Sair'
    }
    return decisao
}



