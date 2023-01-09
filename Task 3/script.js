/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */


// Klasė, kuri sukuria objektą - DOM komponentą - Kortelę

class Kortele {
    constructor(props){
        this.props = props;
        return this.render();
    }

    render(){

        this.kortele = document.createElement("div");
        this.kortele.classList.add("card");
            
        this.login = document.createElement("h2");
        this.tekstas = document.createTextNode(" " + this.props.login);
        this.login.append(this.tekstas);

        this.avatar = document.createElement("img");
        this.avatar.setAttribute("src", this.props.avatar_url);
        this.avatar.setAttribute("alt", "avatar");

        this.kortele.append(this.login, this.avatar);
        return this.kortele;
    }
}

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
            // console.log("element:", element);
            let kortele = new Kortele(element);
            output.append(kortele);
        });
    })
})





// const ENDPOINT = 'https://api.github.com/users';

// let output = document.querySelector("#output");

// let show = document.querySelector("#btn");
// show.addEventListener("click", e =>{
//     // console.log("Paspaustas mygtukas Show Users");
//     fetch(ENDPOINT)
//     .then(res => res.json())
//     .then(data => {
//         // console.log("Gauti duomenys:", data);

//         output.innerHTML = '';
//         data.forEach(element => {

//             let kortele = document.createElement("div");
//             kortele.classList.add("card");
            
//             let login = document.createElement("h2");
//             let tekstas = document.createTextNode(" " + element.login);
//             login.append(tekstas);

//             let avatar = document.createElement("img");
//             avatar.setAttribute("src", element.avatar_url);
//             avatar.setAttribute("alt", "avatar");

//             kortele.append(login, avatar);
//             output.append(kortele);
//         });


//     })
// })