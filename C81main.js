var canvas = document.getElementById("canvas");
color = "black";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mousedown);
function mousedown(e){
 color = document.getElementById("colour").value;
    console.log(color);
    mouse_x = e.clientX;
    mouse_y = e.clientY;
    circle(mouse_x,mouse_y);
}

function circle(){
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
}
