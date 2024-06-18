import prompt from 'prompt-sync';
let ler = prompt();

import { sacar,depositar, exibirSaldo } from './financeiro.js';

export function mensagem(mensagem){
    console.log(mensagem);
}

export function seusaldo(mensagem){
    console.log(mensagem);
    let saldo = Number(ler());

    return saldo
}

export function escolha(deci,a){
    if(deci == 1){
        let deposi = depositar(a);
        mensagem(`sua conta agora tem R$${deposi}`)
        return deposi
    }
    else if(deci ==2){
        
        let saca = sacar(a);
        mensagem(`sua conta agora tem R$${saca}`)
        return saca
    }
    else if(deci == 3){
        let exi = exibirSaldo(a);

        return exi
    }
}