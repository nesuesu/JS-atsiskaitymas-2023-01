/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
.then(res => res.json())
.then(data => {
    console.log(data);

    let output = document.querySelector("#output")
    data.forEach(element => {

        let kortele = document.createElement("div");
        kortele.classList.add("card");

        let brand = document.createElement("h1");
        let tekstas = document.createTextNode(element.brand);
        brand.append(tekstas);

        let models = document.createElement("p");
        element.models.forEach(el => {
            let model = document.createTextNode(" " + el + ",");
            models.append(model); 
        })

        kortele.append(brand,models);
        output.append(kortele);
    })
})