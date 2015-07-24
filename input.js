	var iniciar, jogadorAltura, jogadorLargura, jogadorPosicaoX, velocidadeJogador, bolaLargura, bolaAltura, bolaDiametro, bolaPosX, bolaPosY, velocidadeBola, cruzLargura, cruzAltura, cruzPosX, cruzPosY, velocidadecruz, score, life, lifeLargura1, lifeAltura1, lifeLargura2, lifeAltura2, lifeLargura3, lifeAltura3, lifePosX, lifePosY, velocidadeLife, colisao;

	var playx = 450,
		playy = 270;
	
			//Função Reiniciar o Jogo
			function reset(){
				location.reload();
			}
			
			//Função Iniciar o jogo
			function jogar(){
				iniciar = setInterval(gameLoop, 30);
			}
			
			//Inicio do jogo
			function inicializar()
			{
			
			document.getElementById('menu').style.display="none";
			document.getElementById('gameOver').style.display="none";
			document.getElementById('oVampirinho').style.display="none";
			canvas.style.background="#0C1222";
			
				denteUp.pause();
				perdeLife.pause();
				winSound.pause();
				winLife.pause();
				
				jogadorAltura = 170;
				jogadorLargura = 170;
				bolaDiametro = 10;
				
				life = 3;
				
				lifeLargura = 60;
				lifeAltura = 51;
				
				lifeLargura1 = 60;
				lifeAltura1 = 51;
				
				lifeLargura2 = 60;
				lifeAltura2 = 51;
				
				lifeLargura3 = 60;
				lifeAltura3 = 51;
				
				lifePosX = canvas.width / 1;
				lifePosY = -10;
				velocidadeLife = 5;
				
				score = 0;
				jogadorPosicaoX = (canvas.width - jogadorLargura) / 2;
			
				velocidadeJogador = 25;
				
				canvas = document.getElementById("canvas");
				c = canvas.getContext("2d");	

				bolaLargura = 38;
                bolaAltura = 38;
				
                bolaPosX = canvas.width / 2;
                bolaPosY = -10;
				velocidadeBola = 10;
				colisao = false;
				
				cruzLargura = 35;
                cruzAltura = 43;
				cruzPosX = canvas.width / 3;
                cruzPosY = -10;
				velocidadecruz = 11;
		
				document.addEventListener('keydown', keyDown);

				jogar();		
					
							
			}
			
			//comandos do teclado	
			function keyDown(e) 
			{
				if(e.keyCode == 37)
				{
					if(jogadorPosicaoX > 0)
					{
						jogadorPosicaoX -= 45;
					}
				}
				
				if(e.keyCode == 39)
				{
					if(jogadorPosicaoX < (canvas.width - jogadorLargura))
					{
						jogadorPosicaoX += 45;
					}
				}
			}
			
			//comandos do Smartphone
				
				
			/*	document.getElementById("left").addEventListener("onmousedown", function(){
					while(jogadorPosicaoX > 0){
							jogadorPosicaoX -= 45;
					}
				});
				
				document.getElementById("left").addEventListener("onmouseup", function(){
					
					
				});*/
				
				function onLeft(){
					
					if(jogadorPosicaoX > 0)
						{
							jogadorPosicaoX -= 45;
						}
					//jogadorPosicaoX -= 25;
					console.log("Left!");
				}

				function onRight(){
					if(jogadorPosicaoX < (canvas.width - jogadorLargura))
						{
							jogadorPosicaoX += 45;
						}
					//jogadorPosicaoX +=25;
					console.log("Right!");
				}
			
			//Win!
			function win(){
				clearInterval(iniciar);
			
			
				var diamante = new Image();
					diamante.src = 'image/diamente.png';
					
					diamante.onload = function(){
						c.drawImage(diamante, 435, 125, 200, 128);
					}
					
				c.fillStyle="#FFCA17"; 
				c.fillRect(playx,playy,170,50);
				c.fill();
					
				c.fillStyle="#10096C";
				c.font="35px Arial";
				c.fillText("REPLAY",467,308);
					
				c.fillStyle="#fff";
				c.font="35px Arial";
				c.fillText(score,500,380);
				c.fillText("DENTES",460,420);
				
				c.fillStyle="#fff";
				c.font="14px Arial";
				c.fillText("Desenvolvido por Layse Julyanne - 2015",400,30);	
					
				c.fillStyle="#fff";
				c.fillText("Colaboradores: Isabelly Maria - Ideia; José Carlos, Paulo Henrique, Kamylla Silva e Julio Ximenes Jr. - Apoio",180,50);	

				
					
				//Botão Reset
				function clicouReset2(e){
					var x = e.pageX - canvas.offsetLeft;
					var y = e.pageY - canvas.offsetTop;

					if((x > playx)&& (x < playx+170) && (y > playy-1) && (y < playy+50)){
						reset();	
					}
				}
					
				canvas.onclick = clicouReset2;
			
			}
			
			
			//Menu Game Over
				
				function gameover(){
				
					clearInterval(iniciar);
					
					document.getElementById('gameOver').style.display="block";
					c.fillStyle="#fff";
					c.font="35px Arial";
					c.fillText(score,500,380);
					c.fillText("DENTES",460,420);
					
		
					//Botão Reset
					function clicouReset(e){
						var x = e.pageX - canvas.offsetLeft;
						var y = e.pageY - canvas.offsetTop;

						if((x > playx)&& (x < playx+170) && (y > playy-1) && (y < playy+50) && (life < 3)){
							reset();	
						}
					}
					
					canvas.onclick = clicouReset;
				}	
				
			//loop do jogo
			function gameLoop()
			{
				//Limpa Tela
				c.clearRect(0, 0, canvas.width, canvas.height);
				
				// Dente
				
				var imagem2 = new Image();
				imagem2.src = 'image/dente.png';
				//c.drawImage(imagem2, 980, 20, bolaLargura, bolaAltura);
				
				c.drawImage(imagem2, bolaPosX, bolaPosY, bolaLargura, bolaAltura);
				
				if(bolaPosY <= canvas.height)
				{
					bolaPosY += velocidadeBola;
				}
				else
				{
					bolaPosX = Math.random() * 1810;
					bolaPosY = -10;
					colisao = false;
				}
				
				// Cruz
				
				var cruzImg = new Image();
				cruzImg.src = 'image/cruz.png';
	
				c.drawImage(cruzImg, cruzPosX, cruzPosY, cruzLargura, cruzAltura);
				
				if(cruzPosY <= canvas.height)
				{
					cruzPosY += velocidadecruz;
				}
				else
				{
					cruzPosX = Math.random() * 1810;
					cruzPosY = -10;
					
				}
				
				// Coração
				
					var vida = new Image();
					vida.src = 'image/life.png';
		
					c.drawImage(vida, lifePosX, lifePosY, lifeLargura, lifeAltura);
					
					if(lifePosY <= canvas.height)
					{
						lifePosY += velocidadeLife;
					}
					else
					{
						lifePosX = Math.random() * 1810;
						lifePosY = -20;
						
					}
					
				
			// Checar Colisão
				
				//score
				if((bolaPosX > jogadorPosicaoX && bolaPosX < jogadorPosicaoX + jogadorLargura) && bolaPosY >= (canvas.height - jogadorAltura-10) - 100 && cruzPosY <= (canvas.height-200) && colisao == false)
				{
					score++;
					denteUp.play();
					colisao = true;
					c.clearRect(0, 0, canvas.width, canvas.height);
					
				}
				
				//Recupera vida
				if((lifePosX > jogadorPosicaoX && lifePosX < jogadorPosicaoX + jogadorLargura) && lifePosY >= (canvas.height - jogadorAltura) - 100 /*Esse "200" é do chão*/ && lifePosY <= (canvas.height - 200) && colisao == false)
					{
						
							life++;
							winLife.play();
							colisao = true;
							console.log("Peguei!");
							c.clearRect(0, 0, canvas.width, canvas.height);
							console.log(life);
												
							if(life == 3){
								canvas.style.background="#0C1222";
								lifeLargura3 = 60;
								lifeAltura3 = 51;
							
							}if(life == 2){
								canvas.style.background="#0C1222";
								console.log(life);
								lifeLargura2 = 60;
								lifeAltura2 = 51;
						
							}if(life == 1){
							
								canvas.style.background="#0C1222";
								lifeLargura1 = 60;
								lifeAltura1 = 51;
								
							}if(life > 3){
								life--;
								
							}
							
					}
				
				//Perder vida
				if((cruzPosX > jogadorPosicaoX && cruzPosX < jogadorPosicaoX + jogadorLargura) && cruzPosY >= (canvas.height - jogadorAltura) - 100 /*Esse "200" é do chão*/ && cruzPosY <= (canvas.height - 200) && colisao == false)
				{
					life--;
					perdeLife.play();
					colisao = true;
					c.clearRect(0, 0, canvas.width, canvas.height);
					if(life == 2){
						
						console.log(life);
						lifeLargura3 = 0;
						lifeAltura3 = 0;
					
					}if(life == 1){
					
						lifeLargura2 = 0;
						lifeAltura2 = 0;
						
					}if(life == 0){
					
						lifeLargura1 = 0;
						lifeAltura1 = 0;
						canvas.style.background="#910004";
						
					}if(life == -1){
						console.log("GAME OVER!");
						gameover();
						
					}	
				
				}		
					
						
				// Escreve placar e Life
                c.font = "32pt Tahoma";
				c.fillText(score, canvas.width - 70, 50);
				
				// Life
				var life1 = new Image();
				life1.src = 'image/life.png';
				
				var life2 = new Image();
				life2.src = 'image/life.png';
				
				var life3 = new Image();
				life3.src = 'image/life.png';
				
				c.drawImage(life1, 25, 30, lifeLargura1, lifeAltura1);
				c.drawImage(life2, 90, 30, lifeLargura2, lifeAltura2);
				c.drawImage(life3, 155, 30, lifeLargura3, lifeAltura3);
				
				
				//Níveis
				if(score == 10){
					velocidadeBola = 12;
					velocidadecruz = 12;
								
				}
				
				if(score == 20){
					velocidadeBola = 13;
					velocidadecruz = 13;	
				}
				
				if(score == 30){
					velocidadeBola = 14;
					velocidadecruz = 14;	
				}
				
				if(score == 40){
					velocidadeBola = 15;
					velocidadecruz = 16;					
				}
				
				if(score == 50){
					velocidadeBola = 17;
					velocidadecruz = 18;
				}
				if(score == 60){
					velocidadeBola = 20;
					velocidadecruz = 21;
				}
				if(score == 70){
					velocidadeBola = 23;
					velocidadecruz = 24;
				}
				if(score == 80){
					velocidadeBola = 25;
					velocidadecruz = 26;
				}
				if(score == 90){
					velocidadeBola = 27;
					velocidadecruz = 38;
				}
				if(score >= 100){
					velocidadeBola = 30;
					velocidadecruz = 31;
					c.fillStyle="#FFCA17";
					c.fillText("Parabéns! Você ganhou! :D",280,110);
					win();
					winSound.play();
				}
				
				/* Testes mostraram que é praticamente impossível passar do nível 100
				
				if(score == 110){
					velocidadeBola = 32;
					velocidadecruz = 33;
				}
				if(score == 120){
					velocidadeBola = 34;
					velocidadecruz = 35;
				}
				if(score == 130){
					velocidadeBola = 36;
					velocidadecruz = 37;
				}
				if(score == 140){
					velocidadeBola = 38;
					velocidadecruz = 39;
				}
				if(score == 150){
					velocidadeBola = 41;
					velocidadecruz = 42;
				}
				if(score == 160){
					velocidadeBola = 43;
					velocidadecruz = 44;
				}
				if(score == 170){
					velocidadeBola = 45;
					velocidadecruz = 46;
				}
				if(score == 180){
					velocidadeBola = 47;
					velocidadecruz = 48;
				}
				if(score == 190){
					velocidadeBola = 49;
					velocidadecruz = 50;
				}
				if(score == 200){
					velocidadeBola = 51;
					velocidadecruz = 52;
					c.fillStyle="#FFCA17";
					c.fillText("Parabéns! Você chegou ao Nível Máximo! :D",100,188);
				}
				*/
				
				// Jogador
				var imagem = new Image();
				imagem.src = 'image/vampiro.png';
	
				c.drawImage(imagem, jogadorPosicaoX, (canvas.height - jogadorAltura) - 100, jogadorLargura, jogadorAltura);

				//chão
				c.fillRect(0, 620, 1820, 20);
				c.fillStyle="#3BBD62";
			
				c.fill();

				c.fillRect(0, 640, 1820, 80);
				c.fillStyle="#0B8C32";
				c.fill();
			
				
			}



/*

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
	
*/