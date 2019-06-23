function buttonClicked(Zahl) {
  document.getElementById("grammInput").min = "0";
  document.getElementById("kgOutPut").innerHTML = Zahl / 1000;
  document.getElementById("tonneOutPut").innerHTML = Zahl / 1000000;
  document.getElementById("mgOutPut").innerHTML = Zahl * 1000;
  document.getElementById("pfundOutPut").innerHTML = Zahl / 453592;
  document.getElementById("mikrogrammOutPut").innerHTML = Zahl * 1000000;
}