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

	// au click, l'élément renvoie à random.htmlvar LevelLink = '<a href="'+L+'">'+L+'</a>';
    var box = document.createElement('div');
    box.style.position = 'absolute';
    box.style.width = '6em';
    box.style.height = '1.5em';
    box.style.bottom = '10px';
    box.style.right = '10px';
    box.style.zIndex = '10';
    box.style.background = 'white';
    box.innerHTML = '<a href="../random.html">NEXT</a>';
    document.querySelector("body").appendChild(box);
	
}
