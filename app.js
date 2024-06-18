import prompt from 'prompt-sync';
let ler = prompt();

import { decisao } from './menu.js';
import { sacar,depositar } from './financeiro.js';
import { seusaldo,escolha  } from './exibição.js';

let a = seusaldo('digite seu saldo');
let deci = decisao();
let funciona = escolha(deci,a);
a+=funciona
while(deci != 'Sair'){
    
    deci = decisao();
    
    funciona = escolha(deci,funciona);
    
}