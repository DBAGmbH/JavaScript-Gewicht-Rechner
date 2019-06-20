let grammInput = document.getElementById("grammInput");
let kgOutPut = document.getElementById("kgOutPut");
let tonneOutPut = document.getElementById("tonneOutPut");
let mgOutPut = document.getElementById("mgOutPut");
let pfundOutPut = document.getElementById("pfundOutPut");
let mikrogrammOutPut = document.getElementById("mikrogrammOutPut");
let rechnenButton = document.getElementById("rechnenButton");

function buttonClicked() {
  if (typeof Zahl != "Number") {
    window.alert("Gib Eine Gültige Zahl ein!")
  } else {
    kgOutPut.innerHTML = parseInt(document.grammInput.value / 1000);
    tonneOutPut.innerHTML = parseInt(document.grammInput.value / 1000000);
    mgOutPut.innerHTML = parseInt(document.grammInput.value * 1000);
    pfundOutPut.innerHTML = parseInt(document.grammInput.value / 453.592);
    mikrogrammOutPut.innerHTML = parseInt(document.grammInput.value * 1000000);

  }
}