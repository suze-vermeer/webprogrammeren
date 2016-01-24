function nieuwAccount(){
	$("#nieuwAccount").effect("shake");
	var fn = myForm.elements["fn"].value;
	var ln = myForm.elements["ln"].value;
	var gb = myForm.elements["gb"].value;
	var ww = myForm.elements["ww"].value;
	var hww = myForm.elements["hww"].value;
	var gbArray = ["Suze", "Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen"];



	for(var i = 0; i < gbArray.length; i++){

		if (gb == gbArray[i]) {
			// document.getElementById("gebruikersnaam")
			gb = "correct"
		};

		if (gb == "correct") {
			document.getElementById('antwoord').innerHTML = "De gebruikersnaam is al in gebruik, kies een nieuwe gebruikersnaam."
		}
	}

		//lege velden error
		if (fn == "") {
			document.getElementById('antwoord').innerHTML = "U heeft uw  voornaam niet ingevuld"
		}
		if (ln == "") {
			document.getElementById('antwoord').innerHTML = "U heeft uw  achternaam niet ingevuld"
		}
		if (gb == "") {
			document.getElementById('antwoord').innerHTML = "U heeft uw  gebruikersnaam niet ingevuld"
		}
		if (ww == "") {
			document.getElementById('antwoord').innerHTML = "U heeft uw  wachtwoord niet ingevuld"
		}
		if (hww == "") {
			document.getElementById('antwoord').innerHTML = "U heeft uw  wachtwoord niet herhaald"
		}



		//wachtwoord vergelijken
		if (ww === hww) {}	
			else{
				document.getElementById('antwoord').innerHTML = "Uw wachtwoord komt niet overeen"
			}
			if (fn == "Suze" && ln == "Vermeer" && gb == "correct" && ww == "moppie" && hww == "moppie" ) {
				location.href="tijdlijn.html";
			}

		
}
$(document).ready(function(){
	
		//upload image
		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();

				reader.onload = function (e) {
					$('#blah').attr('src', e.target.result);
				}

				reader.readAsDataURL(input.files[0]);
			}
		}

		$("#imgInp").change(function(){
			readURL(this);
		});
});
//wanneer aan alles is voldaan: location.href="tijdlijn.html";



