var submit = document.getElementById("submit");
var output = document.getElementById("output");
const flimite = 2;

submit.addEventListener("click", () => {
  var date1 = new Date(document.getElementById("date-1").value);
  var date2 = new Date(document.getElementById("date-2").value);

  if (date1.getTime() && date2.getTime()) {
    var timeDifference = date2.getTime() - date1.getTime();
    var dayDifference = Math.abs(timeDifference / (1000 * 3600 * 24));
    if (dayDifference => 2){
      output.innerHTML = `Han pasado <span>${dayDifference} días, No</span> puedes realizar el tr&aacute;mite.`;
    }
    if(dayDifference < flimite){
      output.innerHTML = `Han pasado <span>${dayDifference}</span> puedes realizar el tr&aacute;mite.`;
    }
    if (date1 > date2) {
    output.innerHTML = "Ingresa un periodo de regreso mayor al de salida.";
    }
  }
  else {
    output.innerHTML = "Ingresa un periodo de fechas validos.";
  }
});
