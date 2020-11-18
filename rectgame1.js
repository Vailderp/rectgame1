
var cnvs = document.getElementById('canvas');
var ctx = cnvs.getContext('2d');
var poy = document.getElementById('drawler').getContext('2d');
var score = 0;
//size cube = 25x25
var words = [

'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','br',    //1x21
'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','br',    //2x21
'x','0','x','x','x','x','0','0','x','x','0','0','0','0','x','x','0','0','0','x','x','x','x','0','x','x','x','x','0','x','br',    //3x21
'x','0','x','x','x','0','x','0','x','x','0','x','x','x','x','x','0','x','0','x','x','x','0','x','0','x','x','x','0','x','br',    //4x21
'x','0','x','x','0','x','x','0','x','x','0','x','x','x','x','x','0','0','0','x','x','0','x','x','x','0','x','x','0','x','br',    //5x21
'x','0','x','x','0','x','x','0','x','x','0','x','x','x','x','x','0','x','x','x','x','0','0','0','0','0','x','x','0','x','br',    //6x21
'x','0','x','0','x','x','x','0','x','x','0','x','x','x','x','x','0','x','x','x','x','0','x','x','x','0','x','x','x','x','br',    //7x21
'x','0','0','x','x','x','x','0','x','x','0','x','x','x','x','x','0','x','x','x','x','0','x','x','x','0','x','x','0','x','br',    //8x21
'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','br',    //9x21
'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','re',   //10x20

]
var txt = {
  x:0,
  y:0,
  width: 25,
  height:25,
  canvas:{
    width:750,
    height:250,
  },
}

 words.forEach( wr => {
  //console.log(words[i]);
  if (wr == 'x'){
    poy.beginPath();
    poy.rect(txt.x,txt.y,txt.width,txt.height);
    poy.closePath();
    txt.x += 25;
  }
  if (wr == '0'){
    poy.beginPath();
    poy.fillRect(txt.x,txt.y,txt.width,txt.height);
    poy.closePath();
    txt.x += 25;
  }
  if (wr == 'br'){
    txt.y += 25;
    txt.x =   0;
  }

});
















//GAME
//GAME
//GAME
var cube = {
  x: 0,
  y: 360,
  width: 50,
  height:50,
  xspeed:1,
}
function drawRect (xr,yr){
  this.xr = xr;
  this.yr = yr;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.font = "48px serif";
  ctx.fillText(`Score: ${score}`,100,100)
  ctx.fillRect(xr,yr,cube.width,cube.height);
  ctx.closePath();
}

  var randy = 0;
function drawCanvas (max,min){
  this.max = max;
  this.min = min;
  var max = 1.5;
  var min = -1.5;

  if (cube.y < 0){
    randy = - randy;
  }
  if (cube.y > canvas.height - cube.height){
    randy = - randy;
    }
    if (cube.x + cube.width/5 > canvas.width){
      score --;
      cube.x = 0;
      cube.xspeed --;

    }




  randy += (Math.random() * (max - min) + min);
  cube.x += cube.xspeed;
  cube.y += randy;
  if(randy > 10){
    randy -= max;
  }
  if(randy < -10){
    randy -= min;
  }
  drawRect(cube.x,cube.y)
}
setInterval(drawCanvas,1000/60);

cnvs.onclick = function(e) {
if ((e.pageY > cube.y && e.pageY < cube.y + cube.height)&&(e.pageX > cube.x && e.pageX < cube.x + cube.width)){
  score ++;
  cube.x = 0;
  cube.xspeed ++;
 }
}
