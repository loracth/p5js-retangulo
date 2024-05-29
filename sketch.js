let cor;
let posicaoHorizontal//x
let posicaoVertical//y


function setup() {
  createCanvas(450, 450);
  background("darkblue");
  cor=color (random(0,255), random(0,255), random(0,255));
  posicaoHorizontal=225
  posicaoVertical=225
}

function draw() {
  
  fill(cor);
  stroke("black");
  circle(posicaoHorizontal,posicaoVertical,50);
  if(mouseX<posicaoHorizontal)
     posicaoHorizontal --
  if(mouseX>posicaoHorizontal)
     posicaoHorizontal ++
  if(mouseY<posicaoVertical)
     posicaoVertical --
  if(mouseY>posicaoVertical)
     posicaoVertical ++
  if(mouseIsPressed)
    cor=color (random(0,255), random(0,255), random(0,255));
    
}
