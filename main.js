import { KEPLISTA, HATTER } from "./adat.js";
let lista = []
let srcLista = []
let pontok = 0;

$(function () {

    const ARTICLE = $("article");
    let txt = osszeallit();
    ARTICLE.html(txt);
    const IMG = $("img");
    IMG.on("click", fordit);
    const HEADER = $("header");
    let txt2 = "";
    txt2 += `<h1>Pontok: ${pontok}</h1>`;
    HEADER.html(txt2);
    
})

function osszeallit() {
    let txt = "";
    for (let i = 0; i < KEPLISTA.length; i++) {
        txt += `<div><img id="${i}" src="${HATTER}" alt="kepek"></div>`;
    }
    return txt;
}


function fordit(event) {
    const id = $(event.target).attr('id');
    $(event.target).attr("src", KEPLISTA[id]);
    lista.push(id);
    srcLista.push($(event.target).attr("src"))
    if (lista.length > 1) {
        $("img").off("click");
        if (srcLista[0] == srcLista[1]) {
            setTimeout(callback2, 1000);
        }
        setTimeout(callback, 1000);
    }
}

function callback() {
    const IMG = $("img");
    $(IMG).attr("src", HATTER);
    lista = [];
    srcLista = [];
    $("img").on("click", fordit);
}
function callback2() {
    $(`#${lista[0]}`).css("display", "none");
    $(`#${lista[1]}`).css("display", "none");
    lista = [];
    srcLista = [];
    pontok++;
    const HEADER = $("header");
    let txt2 = "";
    txt2 += `<h1>Pontok: ${pontok}</h1>`;
    HEADER.html(txt2);
}

