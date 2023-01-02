/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let output = document.querySelector("#output");

let forma = document.querySelector("form");
forma.addEventListener("submit", e=>{
    e.preventDefault();
    // console.log(e);
    let svoris = e.target.search.valueAsNumber;
    console.log(svoris);
    output.innerHTML = `
        <div class = "card">
        <h1>${svoris} kg = ${svoris * 2.2046} lb</h1>
        <h1>${svoris} kg = ${svoris / 0.0010000} g</h1>
        <h1>${svoris} kg = ${svoris * 35.274} oz</h1>
        </div>
    `
})