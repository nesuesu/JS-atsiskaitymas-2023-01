/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let output = document.querySelector("#output");

let show = document.querySelector("#btn");
show.addEventListener("click", e =>{
    // console.log("Paspaustas mygtukas Show Users");
    fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => {
        // console.log("Gauti duomenys:", data);

        output.innerHTML = '';
        data.forEach(element => {

            let login = document.createElement("h2");
            let tekstas = document.createTextNode(element.login);
            login.append(tekstas);

            let avatar = document.createElement("img");
            avatar.setAttribute("src", element.avatar_url);
            avatar.setAttribute("alt", "avatar");

            output.append(login, avatar);
        });


    })
})