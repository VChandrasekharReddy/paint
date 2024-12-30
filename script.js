let pencil = document.getElementsByClassName('pencil')[0];
let eraser = document.getElementsByClassName('eraser')[0];
let clear = document.getElementsByClassName('clear')[0];
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height); // Initialize canvas background

let drawing = false;
let erise = false;
let startx, starty;
let color = 'black';

canvas.addEventListener('mousedown', e => {
    startx = e.offsetX;
    starty = e.offsetY;
    drawing = true;
});
canvas.addEventListener('mouseup',()=>{
    drawing = false;
})

canvas.addEventListener('mousemove', e => {
    const cx = e.offsetX;
    const cy = e.offsetY;
    if (drawing) {
        if (erise) {
            eraseron(cx, cy); // Use current position
        } else {
            drawon(startx, starty, cx, cy);
            starty = cy;
            startx = cx;
        }
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
});

function eraseron(x, y) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill(); // Render the eraser stroke
}

function drawon(startx, starty, endx, endy) {
    ctx.strokeStyle = color; // Set stroke color
    ctx.lineWidth = 2; // Set line width
    ctx.beginPath();
    ctx.moveTo(startx, starty);
    ctx.lineTo(endx, endy);
    ctx.stroke(); // Correct method name
}

function selectPencil(){
    erise = false; 
}

function selectEraser(){
    erise = true; 
}

function clearall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = "white"; // Reset background
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    erise = false;
    drawing = false;
}
