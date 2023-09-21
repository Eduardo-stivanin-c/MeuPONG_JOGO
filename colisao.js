

//colisão das raquetes
//let colidiu;
//let xBolinha=x;
//let yBolinha=y;

//a é o x dele na gambiara
//b ´´e é y dele na gambira
//colidindi com a bola
// é que Javascripo case sensitive por mauisculo e minuisculo
  function colisaoRaqueteBiblioteca(a,b) {
    colidiu = collideRectCircle(a, b, raquetecomprimento , raquetealtura, x, y, raio);
    if (colidiu){
        velocidadexbolinha *= -1;
      raquetada.play();
      //tocar som da  raquetada se colidir com ela
    }

}/**/


//colidindo raquetes colididndo com as bordas



