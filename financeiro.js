import prompt from 'prompt-sync';
let ler = prompt();

import { mensagem } from './exibição.js';

export function depositar(saldoAtual){
    let depo = 1;
    while(depo<=0){
    mensagem('Quanto você deseja depositar?');
    depo = Number(ler());
    console.log();
    if(depo == 'c'){
        return console.log('cancelado');
    }
    let novovalor=saldoAtual+depo;

    return novovalor;
    }
    mensagem('Quanto você deseja depositar?');
    depo = Number(ler());
    if(depo == 'c'){
        return console.log('cancelado');
    }
    let novovalor= saldoAtual+depo;

    return novovalor;
}

export function sacar(saldoAtual){
    let sac = 1;
    while(sac<=0){
    mensagem('Quanto você deseja sacar?');
    sac = Number(ler());
    console.log();

    if(sac == 'c'){
        return console.log('cancelado');
    }
    let novovalor = saldoAtual-depo;

    return novovalor;
}
    mensagem('Quanto você deseja sacar?');
    sac = Number(ler());
    console.log();
    if(sac == 'c'){
        return console.log('cancelado');
    }
    let novovalor=saldoAtual-sac;

    return novovalor;
}


export function exibirSaldo(saldoatual){
    console.log(`Seu saldo é R$${saldoatual}`);

    return saldoatual;
}
