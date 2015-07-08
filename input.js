var jogadorPosicaoX, jogadorAltura, jogadorLargura, velocidadeJogador;


jogadorAltura= 19;
jogadorLargura= 14;

var posVerdeX = 10;
var posVerdeY = 0;


function inicializar(){	

	document.getElementById('menu').style.display='none';
	var tela = document.getElementById("tela");
	var c = tela.getContext("2d");	
	
	jogadorPosicaoX = 30;
	velocidadeJogador=25;

	// Jogador
			var imagem = new Image();
			imagem.src = 'image/vampiro.png';
			
			imagem.onload = function(){
				c.drawImage(imagem,jogadorPosicaoX,(tela.height - jogadorAltura)-35,jogadorLargura,jogadorAltura);
			}
		
		
		//chão
			c.fillStyle="#00ff00";
			c.fillRect(0, 115, 300, 5);
			c.fill();
				
			c.fillStyle="#0B8C32";
			c.fillRect(0, 120,  300, 30);
			c.fill();
	
			
		//comandos do teclado	
			function keyDown(e) 
			{
				if(e.keyCode == 37)
				{
				console.log('keydown 37');
					if(jogadorPosicaoX > 0)
					{
						jogadorPosicaoX -= 25;
						
					}
				}
				
				if(e.keyCode == 39)
				{
				console.log('keydown 39');
					if(jogadorPosicaoX < (tela.width - jogadorLargura))
					{
						jogadorPosicaoX += 25;
						console.log('keydown 39');
						
					}
				}
			}
			
			
	
			
			tela.addEventListener('keydown', keyDown);
			console.log(tela.width);
			console.log('keydown');
			
}




			function onLeft(){
				
				jogadorPosicaoX -= 25;
					
				console.log("Left!");
			}

			function onRight(){
				
				jogadorPosicaoX +=25;

				console.log("Right!");
			}
	
