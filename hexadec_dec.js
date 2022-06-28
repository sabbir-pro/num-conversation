"use strict";

let dec = document.querySelector('#dec');

let hex = document.querySelector('#hex');

dec.onclick = function(){

    let vl = document.querySelector('#in-hex').value;

    document.querySelector('.decimal').innerHTML = parseInt(vl, 16).toString(10)

}

hex.onclick = function(){

    let vl = document.querySelector('#in-dec').value;

    document.querySelector('.hexadecimal').innerHTML = ( vl>>>0 ).toString(16)

}

