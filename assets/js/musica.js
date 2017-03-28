var musica = document.getElementById('music');
function reproducir(){
	musica.play();
	console.log(musica.volume);
}
function pausar(){
	musica.pause();
}
function detener(){
	musica.pause();
	musica.currentTime = 0;
}
function subirVolumen(){
	document.getElementById('music').volume += 0.1;

}
function bajarVolumen(){
	document.getElementById('music').volume -= 0.1;
}
function subirAudio(){
	musica.volume = document.getElementById('controlador').value/100;	
	document.getElementById('mostraVolumen').value = parseInt(musica.volume*100);
}
function retroceder(){
	musica.currentTime--;
}

function adelantar(){
	musica.currentTime++;
}
function silenciar(){
	musica.muted = true;
}
function rangoMusica(){
	document.getElementById('mostrarSegundos').value = musica.currentTime;
	document.getElementById('rangeMusica').value = parseInt(musica.currentTime);
	console.log(musica.currentTime);
}
