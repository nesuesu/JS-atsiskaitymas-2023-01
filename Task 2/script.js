/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */


let state = document.querySelector("#btn__state")
let mygtukas = document.querySelector("#btn__element");

let c=1;
mygtukas.addEventListener("click", e=>{
    state.innerHTML = c++;
});