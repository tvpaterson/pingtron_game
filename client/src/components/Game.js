window.onload = function () {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const paddle = document.getElementById("paddle");
    const disc = document.getElementById("disc");
    const brick = document.getElementById("brick");
    const logo = document.getElementById("title-logo");

    let game_running = true;

    let x = canvas.width/2;
    let y = canvas.height-30;

    let dx = 4;
    let dy = -4;

    let ballRadius = 10;

    let paddleHeight = 10;
    let paddleWidth = 75;
    let paddleX = (canvas.width-paddleWidth) / 2;

    let rightPressed = false;
    let leftPressed = false;
    let enterPressed = false;
    let retryPressed = false


    let brickRowCount = 10;
    let brickColumnCount = 21;
    let brickWidth = 40;
    let brickHeight = 10;
    let brickPadding = 10;
    let brickOffsetTop = 40;
    let brickOffsetLeft = 30;

    let bricks = [];
    for(let c=0; c<brickColumnCount; c++) {
        bricks[c] = [];
        for(let r=0; r<brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }

    var score = 0;
    var lives = 1;

    function drawBall() {
        ctx.beginPath();
        ctx.drawImage(disc, x, y)
        ctx.closePath();
    };

    function drawPaddle() {
        ctx.beginPath();
        ctx.drawImage(paddle, paddleX, canvas.height-paddleHeight-10);
        ctx.closePath();
    };

    function drawBricks() {
        for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
                if(bricks[c][r].status === 1) {
                    var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                    var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.drawImage(brick, brickX, brickY);
                    ctx.closePath();
                }
            }
        }
    }

    function draw() {
        if (game_running){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawTopHUD();
        drawScore();
        drawLives();
        collisionDetection();
       

        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }

        if(y + dy < ballRadius) {
            dy = -dy;
        } else if(y + dy > canvas.height-ballRadius) {
            if(x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            } else {
                lives--;
                if(!lives) {
                    game_running = false;
                    check_game_running();
                } else {
                    x = canvas.width/2;
                    y = canvas.height-30;
                    dx = 4;
                    dy = -4;
                    paddleX = (canvas.width-paddleWidth)/2;
                }
            }
        }

        if(rightPressed) {
            paddleX += 7;
            if (paddleX + paddleWidth > canvas.width){
                paddleX = canvas.width - paddleWidth;
            }
        } else if(leftPressed) {
            paddleX -= 7;
            if (paddleX < 0){
                paddleX = 0;
            }
        }

        x += dx;
        y += dy;
        requestAnimationFrame(draw);
        } else if(score === brickRowCount * brickColumnCount) {
            drawWinScreen();
        } else {
            drawGameOver();
        }

    }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);

    function mouseMoveHandler(e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) {
            paddleX = relativeX - paddleWidth/2;
        }
    }

    function keyDownHandler(e) {
        if(e.key === "Right" || e.key === "ArrowRight") {
            rightPressed = true;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft") {
            leftPressed = true;
        } else if (e.key === "Enter" || e.keyCode === 13) {
            enterPressed = true;
            startGame();
        } else if (e.key === "r" || e.keyCode === 82) {
            retryPressed = true;
            game_running = true;
            lives = 3
        } 
    }

    function keyUpHandler(e) {
        if(e.key === "Right" || e.key === "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft") {
            leftPressed = false;
        } else if (e.key === "Enter" || e.keyCode === 13) {
            enterPressed = false;
        } else if (e.key === "r" || e.keyCode === 82) {
            retryPressed = false;
        } 
    }

    function collisionDetection() {
        for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
                var b = bricks[c][r];
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight && b.status === 1) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score === brickRowCount*brickColumnCount) {
                        game_running = false()
                        drawWinScreen()
                    }
                }
            }
        }
    }

    function drawStartScreen() {
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.drawImage(logo, 150, 50);
        ctx.font = "64px Orbitron";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Press ENTER to start", 150, 500);
        }

    function drawGameOver() {
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "132px Alegreya SC";
        ctx.fillStyle = "red";
        ctx.fillText("You Died", 275, canvas.height/2);
        }

    function drawWinScreen() {
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "112px Alegreya SC";
        ctx.fillStyle = "yellow";
        ctx.fillText("A Winner Is You", 150, canvas.height/2);
        }

    function drawTopHUD() {
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, 30);
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fill();
        ctx.closePath();
    };

    function drawScore() {
        ctx.font = "16px Orbitron";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: "+score, 8, 20);
    }

    function drawLives() {
        ctx.font = "16px Orbitron";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: "+lives, canvas.width-90, 20);
    }

    function startGame() {
        if (enterPressed === true && game_running === true){
            console.log("Spacebar pressed.")
            draw();
        }
    }

    function check_game_running() {
        if (game_running === false){
            drawGameOver();
        }
    }
    
    drawStartScreen();
}