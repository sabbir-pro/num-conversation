"use strict";

let bin = document.querySelector('#bin');

let dec = document.querySelector('#dec');

bin.onclick = function(){

    let vl = document.querySelector('#in-bin').value;

    document.querySelector('.decimal').innerHTML = parseInt(vl, 2).toString(10)

}

dec.onclick = function(){

    let vl = document.querySelector('#in-dec').value;

    document.querySelector('.binary').innerHTML = ( vl>>>0 ).toString(2)

}

