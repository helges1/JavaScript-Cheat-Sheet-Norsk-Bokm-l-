/*VARIABLER*/

		//variabel
		var navnPaaVar = "hei verden";

		//Innholdet havner i konsollen til nettleserens utviklerværktøy
		console.log(navnPaaVar);

		//endre variabel for senere bruk
		navnPaaVar = "et annet ord";

		//matte
		//flere matteoperasjoner kan sees i README.MD
		var x = 12;
		var x = 15;

		var z = x + y;

		console.log(z); 

		//Kombinere tall sammen
		var x = 12;
		var x = 15;

		var z = parseInt(x + " " + y);

		console.log(z); 

		//kombinere setninger
		var x = "hei";
		var x = "verden";

		//Legg til " " for å få mellomrom
		var z = x + " " + y;

		console.log(z); 

		/*FUNKSJONER*/

		//en funksjon
		function enFunksjon() {
			//Legg koden i en funksjonen på innsiden av krøll paranteser som dette.
			console.log("hei verden");
		}

		//For å kjøre funksjonen skriver du navnet på funksjonen med paranteser
		enFunksjon();


		//
		function enFunksjon(melding) {
			
			console.log(melding);
		}

		//Hva som står i parantesen sier hva konsollen skal vise.
		enFunksjon("Hei verden");


		//kombinering av variabler og funksjoner
		function enFunksjon(melding) {
			
			console.log(melding);
		}

		var melding = "Hei verden";

		enFunksjon(melding);

		//callback