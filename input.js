function inicializar(){
	var tela = document.getElementById("tela");
	var c = tela.getContext("2d");	
			
			c.fillStyle="#00ff00"; 
			c.fillRect(340,200,200,400); 
			c.fillStyle="#ff0000";
			c.fillRect(740,200,200,400);
			c.fillStyle="gray";
			
			c.fillStyle="blue";
			c.beginPath();
			c.arc(640,400,50,0 * Math.PI,2*Math.PI);
			c.fill();			
}