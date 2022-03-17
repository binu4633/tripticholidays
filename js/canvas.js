    
const canvas= document.getElementById("can");



const context= canvas.getContext("2d");


canvas.width= window.innerWidth;
canvas.height= window.innerHeight;


const star = function(x,y,radius,dx,dy){
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.dx=dx;
    this.dy=dy;

    this.draw= function(){
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI*2);
        context.fillStyle="#fff"
        
        context.fill();
        context.closePath();
    }
   
    this.update=function(){
      /* if(this.x<innerWidth/2){
            this.dx=this.dx*(-1);
           // this.dy*=-1;
        }*/
     const firstPoint={
         x:this.x,y:this.y
     };
        if(this.x-this.radius>innerWidth||this.x-this.radius<0){
              this.x= canvas.width/2+((Math.random()-0.5)*200);
             // this.y=canvas.width;
              this.radius=0.9;
          }
          if(this.y-this.radius>innerHeight||this.y-this.radius<0){
              this.y= canvas.height/1.5+((Math.random()-0.5)*200);
              this.radius=0.9;
          }
   
if(this.x<innerWidth/2){
    this.x-=this.dx
}else{
    this.x+=this.dx;
}

     //   this.x+=this.dx;
        this.y+=this.dy;
        if(this.radius<1.75){
            this.radius+=0.0001;
        }
       

        this.draw();
    
    }
}




function init(){
    starArray=[];
    for(var i=0;i<650;i++){
       // var  x=canvas.width/2+((Math.random()-0.5)*200);
       var x=canvas.width*Math.random();
       // var  y = canvas.height/1.5+((Math.random()-0.5)*200);
       var y=canvas.height*Math.random();
        var radius=1.2;
        var dx=0+0.3*Math.random();
        var dy=-0.15;

        starArray.push(new star(x,y,radius,dx,dy));

    }

}


function animation(){
    context.clearRect(0, 0,canvas.width,canvas.height);
    
    for(var i=0;i<starArray.length;i++){
        starArray[i].update();
    }
   
    requestAnimationFrame(animation);
    
}

init();

animation();