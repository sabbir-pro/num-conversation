"use strict";

let oct = document.querySelector('#oct');

let bin = document.querySelector('#bin');

oct.onclick = function(){

    let vl = document.querySelector('#in-bin').value;

    document.querySelector('.octal').innerHTML = parseInt(vl, 2).toString(8)

}

bin.onclick = function(){

    let vl = document.querySelector('#in-oct').value;

    document.querySelector('.binary').innerHTML = parseInt(vl, 8).toString(2)

}

