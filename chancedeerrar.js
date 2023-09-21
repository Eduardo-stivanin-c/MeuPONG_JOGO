/*


no modo jogador unico









*/
let chanceDeErrar = 0;

function calculaChanceDeErrar() {
  if (pontosoponente >= meuspontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}