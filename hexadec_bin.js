"use strict";

let hex = document.querySelector('#hex');

let bin = document.querySelector('#bin');

hex.onclick = function(){

    let vl = document.querySelector('#in-bin').value;

    document.querySelector('.hexdecimal').innerHTML = parseInt( vl, 2).toString(16)

}

bin.onclick = function(){

    let vl = document.querySelector('#in-hex').value;

    document.querySelector('.binary').innerHTML = parseInt(vl, 16).toString(2)

}

