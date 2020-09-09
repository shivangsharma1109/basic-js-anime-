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

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = 4;
var dy = 4;
var radius = 40;
function animate() {
    requestAnimationFrame(animate);
    cntxt.clearRect(0, 0, innerWidth, innerHeight);
    cntxt.beginPath();
    cntxt.arc(x, y, radius, 0, Math.PI * 2, false);

    cntxt.strokeStyle = 'black';
    cntxt.stroke();
    cntxt.fillStyle = "pink";
    cntxt.fill();

    if(x + radius > innerWidth || x - radius < 0){
        dx=-dx;
    }
    if(y + radius > innerWidth || y - radius < 0){
        dy = -dy;
    }

    x+=dx;
    y+=dy;
    
}
animate();

