//variveis da bolinha

//velocidade da bolinha
let velocidadexbolinha = 5;
let velocidadeybolinha = 5;
//x = eixo x  largungura
//y= euixo y de coordenadas cartesianas altura
//d =diametro

let x = 300;
let y = 200;
let d = 13;
let raio = d / 2;

//raquete jogador(a)
let xraquete = 0;
let yraquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 105;

let retangulo_raio = raquetealtura / 2;
//raquete do oponente
var posicaoxoponente = 588;
var posicaoyoponente = 150;
let velocidadeYoponenete;
let n = 0;
//let notaauladeprogramacao=constrain(n,0,10);
//var colidiu='';
//pontos meus
let meuspontos = 0;

//pontos do oponente
let pontosoponente = 0;

//variaveis do sons
let raqueteda;
let ponto;
let trilha;


function setup() {
  createCanvas(600, 400);
  
  //toca trilha em loop
  trilha.loop();
  
}

function draw() {
  //isso aqui roda em loop
  //0= preto e 260 em diante ada branco ai claoriando  a //fundo

  background(0);
  mostrabolinha();

  movimentabolinha();
  verficacolisaoborda();
  //se biblioteca

  //    posição
  //    x  y  | xlargura y_altura
  //minha raquete ,ou seja,jogador(a))
  raquete(xraquete, yraquete);

  //raquete do oponente
  raquete(posicaoxoponente, posicaoyoponente);

  //largura da borda
  //width traduzido é largura
  //|| é ou
  movimentaminharaquete();

  //verificarcolisaoraquete()


  //colide cbolinha com raquete do oponente
  //colisaoraqueteoponentebiblioteca()
  //colisão com biblioteca na minha raquete do jogador(a)
  colisaoRaqueteBiblioteca(xraquete, yraquete);

  //paramentros raquete colide do oponetente
  colisaoRaqueteBiblioteca(posicaoxoponente, posicaoyoponente);
  //raquetes

  // colisaoRaqueteBiblioteca();
  incluirplacar();
   velocidadedooponente();

  marcarpontos();
}

//fim do loop

function mostrabolinha() {
  circle(x, y, d);
}
//#########pre-carregar ao iniciar arquivos############
function preload(){
  trilha=loadSound("trilha.mp3");
  ponto=loadSound("ponto.mp3");
  raquetada=loadSound("raquetada.mp3");
}


//#########################################################



function movimentabolinha() {
  //move bolinha
  x += velocidadexbolinha;
  y += velocidadeybolinha;
}

function verficacolisaoborda() {
  //o raio seve pra corrigir bug da bolinha entrar dendtr da borda
  if (x > width + raio || x < 0) {
    velocidadexbolinha *= -1;
  }

  if (y > height - raio || y < 0) {
    velocidadeybolinha *= -1;
  }
}
function raquete(x, y) {
  //minha raquete
  rect(x, y, raquetecomprimento, raquetealtura);
}
function movimentaminharaquete() {
  //se tecla pra cima presionada move pra cima subtriando 10
  if (keyIsDown(UP_ARROW)) {
    yraquete -= 10;

    //evitando que rauqete sai da tela do jogo,colide com biordas
  }
  if (keyIsDown(DOWN_ARROW)) {
    //seta pra pra baixo
    yraquete += 10;
  }
  //limita pra raquete coilidir com borda
  yraquete = constrain(yraquete, 10, 310);
}

function velocidadedooponente() {
  //falha pra ooponete errrar
  // y= é altura y da bolinha
  // a  alutra da bolinha - 30 pro opoenten temavbem errar
  velocidadeYoponenete = y - posicaoyoponente - raquetecomprimento / 2 - 30;

  posicaoyoponente += velocidadeYoponenete;

  //evita que raquete do oponente passe aleém da borda
  posicaoyoponente = constrain(posicaoyoponente, 10, 310);
}

//###########PLACAR DE PONTOS############

function  incluirplacar(){
  
  //CENTRALIZA O TEXTO   e o amplia
  
   textAlign(CENTER);
  textSize(16);
  //RETAGULO DOS PONTOS
  //fil da cor laranja escuro
  fill (255,140,0);
  //contorno em todos os obejeto da tela
 stroke(255);
  //
  rect(120,10,40,20);
  rect (420,10,40,20)
 
  //fill muda a cor pra branco
  fill(255);
  //escreve
  text(meuspontos,150,26);
  text(pontosoponente,450,26);
  
  
}


function marcarpontos(){
  
  if (x>590) {
    //soma meus pontos
meuspontos+=1;


}
  if(x<10){
     pontosoponente +=1;
     
     }
  
  
 
}














/*
function verificarcolisaoraquete(){
  //se x da bolinha pra colidir com raute
  //x bolinha -raio da bolinha
  if(x -raio < xraquete + raquetecomprimento && y  - raio< yraquete + raquetealtura &&  y + raio> yraquete){
    //multiplica por -1 pra ivnerter direção x largura
    velocidadexbolinha *=-1;
    
  }
}

*/
//#################################################################
//inicio  funcção de colisão

//###################################################################
//colididno raqute com bolinha por biblioteca pra corrigir bugs
/*function verificacolisaoraquete(x1,y1)
{
   colidiu=collideRectCircle(posicaoxoponente,  posicaoyoponente, raquetecomprimento, raquetealtura, x1, y1 , retangulo_raio);
 // colidiu=collideRectCircle(x1, y1, raquetecomprimento, raio);
  
  if (colidiu){
velocidadexbolinha  *= -1;
  
  }
  
    //se colidiu verdadeiro
  }

*/

/*
//coolisão da com a raquete do oponente*/
/*
  function colisaoraqueteoponentebiblioteca(){
  
  
  colidiu=collideRectCircle(posicaoxoponente,  posicaoyoponente, raquetecomprimento, 150, x, y , raio);
    //se colidiu verdadeiro
    
    
  if (colidiu){
velocidadexbolinha  *= -1;
  }
  
  }
//
function raqueteopenente(){

  rect(posicaoxoponente, posicaoyoponente,raquetecomprimento, raquetealtura);

}



*/

/*
  function verificacolisao()

  colidiu=collideRectCircle(posicaoxoponente,  posicaoyoponente, raquetecomprimento, 150, x, y , raio);
    //se colidiu verdadeiro
    
    
  if (colidiu){
velocidadexbolinha  *= -1;
  }
  
  }
*/
