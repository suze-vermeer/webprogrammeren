var h=0
function inloggen(){
	$("#inloggen").effect("shake");
	var gn = myForm.elements["gn"].value;
	var ww = myForm.elements["ww"].value;
	var gnArray = ["Suze", "Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen"];

	for(var i = 0; i < gnArray.length; i++){

		if (gn == gnArray[i]) {
			// document.getElementById("gebruikersnaam")
			gn = "correct"
		};

	}

	if (gn == "correct" && ww == "moppie") {
		location.href="tijdlijn.html";
	}

	if (ww == "") {
		document.getElementById('antwoord').innerHTML = "U heeft uw  wachtwoord niet ingevuld"
	}
	else if (gn == "") {
		document.getElementById('antwoord').innerHTML = "U heeft uw gebruikersnaam niet ingevuld"
	}
	else {
		document.getElementById('antwoord').innerHTML = "U heeft uw gebruikersnaam en/of wachtwoord niet correct ingevuld"
		$("p").effect("shake");
	}
	h++;

		if(h>2){
			document.getElementById("bericht").innerHTML = "U heeft 3× fout ingelogd, u moet nu 3 minuten wachten."
			$("button").hide();
			$("input").prop('disabled', true);
		}

}