// console.log("labas");
//eilutes  komentaras//
/* Bloko komentaras
*/
// var spalva;
// spalva = "zalia";
// spalva = 9
// console.log(spalva);


// let yraGyvunas = false;
// if (yraGyvunas) {
//     console.log("Yra gyvunas!");
// }

// let skaicius = prompt("iveskite skaiciu");

// console.log("ivestas skaicius:", skaicius);

// if (skaicius > 10){
// console.warn("ivestas skaicius yra daugiau > 10");
// } else {
//     console.warn("ivestas skaicius yra daugiau <= 10");
// }



// let zinute = (metai == 2017) ? "Einamieji metai" : "Praeitis"; /* let a = salyga ? A:B*/

// if (metai === 2017) {
//     let zinute = "dabartiniiai metai";
// } else {
//     let zinute = "Praeitis";
// }

// let skaicius = 0;
// let raide = "A";
// let status = null;
// let array = [];
// let kazkas;

// if (kazkas) {
//     console.error('Tai kazkas', kazkas);
// }

// let userName = prompt("Iveskite savo prisijungimo varda");
// if (userName) {
//     userName = userName.toLowerCase();
// }
// let password;

// if (userName === "admin") {
//     password = prompt("Password");
//     if (password === "TheMaster") {
//         alert("Yey");
//     } else if (password !== "TheMaster" && typeof password === "string") {
//         alert("wrong");
//     } else {
//         alert("bye bye");
//     }

// } else if (userName !== "admin" && typeof userName === "string") {
//     alert("As taves nepazistu " + userName);
//     console.log(userName, typeof userName);

// } else {
//     alert('Viso gero!');
// }

// var vardas = prompt("Iveskite varda");
// console.log("vardo ilgis:", vardas.length);
// console.log("Antra vardo raide:", vardas[1]);
// console.log("Pries paskutine vardo raide:", vardas[vardas.length - 2]);

// let skaicius = "2,25";
// let rezultatas = skaicius.replace(',','.');
// console.log("Skaicius yra:", rezultatas);

//  /*Pavyzdys su split*/
//  let cityRaw = "VLN-Vilnius"; 
//  let code;
//  let city;
//  /*let cityArray = cityRaw.split("-");

// // console.log(cityArray);
// // code = cityArray[0];
// // city = cityArray[1];
// // console.log("Miestas yra:", city, ", Kodas", code);

// /* Nuadojant .sub */
// code = cityRaw.substr(0, 3);
// city = cityRaw.substr(4, cityRaw.length - 4);
// console.log("Miestas yra:", city, ", Kodas", code);

// let arVilnius = cityRaw.indexOf("Vilnius");
// if (arVilnius !== -1) {
//     arVilnius = 'Taip!';
// }
// console.log(`Ar miestas yra Vilnius: ${arVilnius}`);

let enterPrice = prompt("Įveskite prekės kainą:");
let delivery = prompt("Ar reikalingas pristatymas?");
if (delivery) {
    delivery = delivery.toLowerCase()
}
if (delivery === "taip") {
    deliveryCity = prompt("Į kurį miestą pristatyti?")
    if (deliveryCity === "Vilnius" && typeof delivery === "string" || enterPrice <= "50" && typeof ebterPrice === "number") {
        alert("Pristatymas nemokamas!");
    } else if (enterPrice >= "50" && typeof enterprice === "number") {
        alert("Pristatymas nemokamas");
    } else alert("Pristatyms kitur Lietuvoje 20 eur.");
}
if (delivery === "ne") {
    thankNote = prompt("Ačiū kad pirkote");
}





