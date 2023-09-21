function velocidadedooponente(){
 //se tecla pra cima presionada move pra cima subtriando 10
  
  //87 é tecla w do teclado mais detalhes em https://www.toptal.com/developers/keycode
  
  if (keyIsDown(87)) {
     posicaoyoponente -= 10;

    //evitando que rauqete sai da tela do jogo,colide com biordas
  }
  //83 é tecla S
  if (keyIsDown(83)) {
    //seta pra pra baixo
    posicaoyoponente += 10;
  }
  //limita pra raquete coilidir com borda
 posicaoyoponente = constrain(posicaoyoponente, 10, 310);
}