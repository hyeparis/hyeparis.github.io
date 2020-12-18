
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;


const circle = {
    x:150,
    y:200,
    size: 100, // radius
    dx: 5,
    dy: 2
}

const circle2 = {
    x:300,
    y:50,
    size: 30, // radius
    dx: 5,
    dy: 2
}

function drawCircle(){
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();
}
function drawCircle2(){
    ctx.beginPath();
    ctx.arc(circle2.x, circle2.y, circle2.size, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();
}
function update(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawCircle();
    drawCircle2();
    // change position

    
    circle.y += circle.dy;
    circle2.y += circle2.dy;

    // detect side wall
    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0  ) {
        // it means it hits the side
        circle.dx *= -1;
    }
    // bottom walls
    if(circle.y + circle.size > canvas.height || circle.y - circle.size  < 0) {
        circle.dy *= -1;
    }

     // detect side wall
    if(circle2.x + circle2.size > canvas.width || circle2.x - circle2.size < 0  ) {
        // it means it hits the side
        circle2.dx *= -1;
    }
    // bottom walls
    if(circle2.y + circle2.size > canvas.height || circle2.y - circle2.size  < 0) {
        circle2.dy *= -1;
    }
    requestAnimationFrame(update);
    
}

update();

