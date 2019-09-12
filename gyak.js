"use strict";

let tabla = "<table>";

for (let i = 1; i < 21; i++) {
    tabla += "<tr>"
    for (let j = 1; j < 21 ; j++) {
        if(i ==1 || j ==1) { 
            tabla += `<td style="background-color: limegreen";><b>${i*j}</b></td>`;
        }
            else {
                    if (i % 5 ==0 || j % 5 ==0) {
                        tabla +=`<td title="${i} * ${j}" style="background-color: red">${i*j}</td>`;
                    }
                else{
              tabla +=`<td title="${i} * ${j}">${i*j}</td>`;
                }
                
        }
    }
    tabla += "</tr>"
}

tabla += "</table>";

document.getElementById('elso').innerHTML=tabla;