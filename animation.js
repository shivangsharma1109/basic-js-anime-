//console.log("working");
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var cntxt = canvas.getContext('2d');
// cntxt.fillRect(100, 100, 100, 100);
// //line
// cntxt.beginPath();
// cntxt.moveTo(50, 300);
// cntxt.lineTo(300, 100);
// cntxt.lineTo(400, 300);
// cntxt.stroke();

// //arc or circle
// // cntxt.arc(600, 600, 30, 0, Math.PI * 2, false);
// // cntxt.stroke();

// for (var i = 0; i<500 ; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     cntxt.beginPath();
//     cntxt.arc(x, y, 30, 0, Math.PI * 2, false);
//    cntxt.strokeStyle = 'blue';
//    cntxt.stroke();
//    // cntxt.stroke();
//    }

// cntxt.beginPath();
// cntxt.arc(200, 200, 30, 0, Math.PI * 2, false);
// cntxt.strokeStyle = 'blue';
// cntxt.stroke();


function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius=radius;

    this.draw = function(){
        cntxt.beginPath();
        cntxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    
        cntxt.strokeStyle = 'black';
        cntxt.stroke();
        cntxt.fillStyle = "pink";
        cntxt.fill();
       
    }

    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
           this.dx=-this.dx;
        }
        if(this.y + this.radius > innerWidth || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
    
       this.x+=this.dx;
       this.y+=this.dy;

       this.draw();

    }
}


var circleArray = [];
for(var i=0; i<100; i++){
 var x = Math.random() * (innerWidth - radius * 2) + radius;
 var y = Math.random() * (innerHeight - radius * 2) + radius;
 var dx = (Math.random() - 0.5) * 8;
 var dy = (Math.random() - 0.5) * 8;;
 var radius = 30;
    circleArray.push(new Circle(x, y, dx, dy, radius));
   
}





function animate() {
    requestAnimationFrame(animate);
    cntxt.clearRect(0, 0, innerWidth, innerHeight);
  for(var i = 0; i< circleArray.length;i++){
      circleArray[i].update();
  }
}
animate();

