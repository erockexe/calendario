//Declaring and initializing variables
var submit = document.getElementById("submit");
var output = document.getElementById("output");
const flimite = 2;

submit.addEventListener("click", () => {
  //Create a Date object from input value
  var date1 = new Date(document.getElementById("date-1").value);
  var date2 = new Date(document.getElementById("date-2").value);

  //Check if the input dates are valid
  //If valid calculate the difference
  if (date1.getTime() && date2.getTime()) {
    //Calculate difference in time using getTime function
    //getTime calculates number of years since January 1,1970
    var timeDifference = date2.getTime() - date1.getTime();

    //Since this value is in milliseconds we need to convert it into days
    //We want the difference to be a non-negative number. Hence we use Math.abs()
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
  //Else display that the input is valid
  else {
    output.innerHTML = "Ingresa un periodo de fechas validos.";
  }
});