let grammInput = document.getElementById("grammInput");
let kgOutPut = document.getElementById("kgOutPut");
let tonneOutPut = document.getElementById("tonneOutPut");
let mgOutPut = document.getElementById("mgOutPut");
let pfundOutPut = document.getElementById("pfundOutPut");
let mikrogrammOutPut = document.getElementById("mikrogrammOutPut");
let rechnenButton = document.getElementById("rechnenButton");

function gInkg(Zahl) {
  if (typeof Zahl = Number) {
    kgOutPut.innerHTML = Zahl / 1000;
  } else {
    window.alert("Gib Eine Gültige Zahl ein!")
  }


}