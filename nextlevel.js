/*!
 * NextLevel JS
 *
 * Released under the Unlicense
 */

// Faire un timeout après XXX secondes de jeu:

function TimeRunningOut() {

	var interval = 3000;

	setTimeout( function(){

                  NextLevel();

    },interval);

}

// exécuter la fonction au chargement:

window.onload = TimeRunningOut;

// Créer un élément HTML qui permet d'avancer au prochain niveau:

function NextLevel() {

	console.log("Next Level!");

	// construire l'élément:
	// au click, l'élément renvoie à random.html

		var nextstyle = document.createElement('link');
		nextstyle.setAttribute('rel', 'stylesheet');
		nextstyle.setAttribute('href', '../nextlevel.css');
		document.querySelector("head").appendChild(nextstyle);

		var box = document.createElement('div');
		box.id = 'nextlevel';
    box.innerHTML = '<a href="#" id="replay">REPLAY</a><a id="next" href="../random.html">NEXT</a>';
    document.querySelector("body").appendChild(box);

}

// Action Replay: recharger la page courante

document.querySelector("button").addEventListener( "click", function(){

 
});

