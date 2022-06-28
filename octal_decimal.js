"use strict";

let oct = document.querySelector('#oct');

let dec = document.querySelector('#dec');

oct.onclick = function(){

    let vl = document.querySelector('#in-oct').value;

    document.querySelector('.decimal').innerHTML = parseInt(vl, 8).toString(10)

}

dec.onclick = function(){

    let vl = document.querySelector('#in-dec').value;

    document.querySelector('.octal').innerHTML = ( vl>>>0 ).toString(8)

}

 
