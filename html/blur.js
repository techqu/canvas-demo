/**
 * Created by quguang on 16/1/31.
 */
//var canvasWidth=window.innerWidth;
//var canvasHeight=window.innerHeight;
var canvasWidth='550';
var canvasHeight='366';

var canvas = document.getElementById('canvas');
var context=canvas.getContext('2d');

canvas.height = canvasHeight;
canvas.width = canvasWidth;


var img=new Image();
var radius=50;
var clippingRegion ={};
img.src='img2.jpg';

var leftMargin = 0, topMargin = 0;
img.onload=function(){

    //$('#blur-div').css("width",canvasWidth+'px');
    //$('#blur-div').css("height",canvasHeight+'px');
    //
    //$('#blur-image').css("width",img.width+'px');
    //$('#blur-image').css("height",img.height+'px');
    //
    //leftMargin=(img.width - canvas.width)/2;
    //topMargin=(img.left - canvas.height)/2;
    //
    //$('#blur-image').css('top','-'+topMargin+'px');
    //$('#blur-image').css('left','-'+leftMargin+'px');
    initCanvas();
}
function initCanvas(){
    clippingRegion ={
        x:Math.random()*(canvas.width-2*radius)+radius,
        y:Math.random()*(canvas.height-2*radius)+radius,
        r:radius
    };
    draw(img,clippingRegion);
}
function setClippingRegion(clippingRegion){
    context.beginPath();
    context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI*2,false);
    //context.rect(50,20,200,120);
    context.clip();
    //context.drawImage(img,0,0);
}
function draw(img,clippingRegion){

    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    setClippingRegion(clippingRegion);
    context.drawImage(img,0,0);

    //context.drawImage(img,leftMargin,topMargin,canvas.width,canvas.height,0,0,canvas.width,canvas.height);
    context.restore();
}


function show(){


  var animation=  setInterval(function(){
        clippingRegion.r+=20;
        if(clippingRegion.r>2*Math.max(canvas.width,canvas.height)){
            clearInterval(animation)
        }
        draw(img,clippingRegion);
    },10)
}
function reset(){
  initCanvas();
}