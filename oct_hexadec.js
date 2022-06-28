"use strict";

let oct = document.querySelector('#oct');

let hex = document.querySelector('#hex');

oct.onclick = function(){

    let vl = document.querySelector('#in-hex').value;

    document.querySelector('.octal').innerHTML = parseInt(vl, 16).toString(8)

}

hex.onclick = function(){

    let vl = document.querySelector('#in-oct').value;

    document.querySelector('.hexadecimal').innerHTML = parseInt( vl, 8).toString(16)

}

