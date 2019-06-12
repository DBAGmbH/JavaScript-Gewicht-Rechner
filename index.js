var grammInput = document.getElementById("grammInput");
var kgOutPut = document.getElementById("kgOutPut");
var tonneOutPut = document.getElementById("tonneOutPut");
var mgOutPut = document.getElementById("mgOutPut");

function Rechnen(value) {
  if (typeof value != Number) {
    window.alert("Falsche Eingabe Gebe eine Zahl ein")
  }

  kgOutPut.innerHTML = parseInt(value) / 1000;
  tonneOutPut.innerHTML = parseInt(value) / 1000000;
  mgOutPut.innerHTML = parseInt(value) * 1000;

}

grammInput.addEventListener("input", Rechnen(grammInput));



