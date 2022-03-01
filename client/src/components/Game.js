window.onload = function () {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const paddleOne = document.getElementById("paddleSpriteOne");
    const paddleTwo = document.getElementById("paddleSpriteTwo");
    const disc = document.getElementById("disc");

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
    let x = getRandomInt(1800);
    let y = getRandomInt(600);
    
    let dx = 4;
    let dy = -4;
    
    const ballRadius = 10;
    
    const paddleHeight = 75;
    const paddleWidth = 10;
    var paddleOneY = (canvas.height-paddleHeight) / 2;
    var paddleTwoY = (canvas.height-paddleHeight) / 2;
    
    let rightPressed = false;
    let leftPressed = false;
    let aPressed = false;
    let dPressed = false;
    let spacePressed = false;
    let shiftPressed = false;
    
    var playerOneScore = 0;
    var PlayerTwoScore = 0;

    function drawBall() {
        ctx.beginPath();
        ctx.drawImage(disc, x, y);
        ctx.closePath();
    };

    function drawNewBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    };

    function drawPlayerOne() {
        ctx.beginPath();
        ctx.drawImage(paddleOne, 10, paddleOneY);
        ctx.closePath();
    };

    function drawPlayerTwo() {
        ctx.beginPath();
        ctx.drawImage(paddleTwo, canvas.width-paddleWidth-10, paddleTwoY);
        ctx.closePath();
    };

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawPlayerOne();
        drawPlayerTwo();
        drawTopHUD();
        drawLowHUD();
        drawP1Score();
        drawP2Score();
    

        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        } else if(y > paddleOneY && y < paddleOneY + paddleWidth) {
                dx = -dx
                console.log("HIT");
            }


        if(y + dy < ballRadius+20 || y + dy > canvas.height-ballRadius-20) {
            dy = -dy;
        }
            
        if(rightPressed) {
            paddleOneY += 7;
            if (paddleOneY + paddleHeight > canvas.height){
                paddleOneY = canvas.height - paddleHeight;
            }
        } else if(leftPressed) {
            paddleOneY -= 7;
            if (paddleOneY < 0){
                paddleOneY = 0;
            }
        }
            
        if(dPressed) {
            paddleTwoY += 7;
            if (paddleTwoY + paddleHeight > canvas.height){
                paddleTwoY = canvas.height - paddleHeight;
            }
        } else if(aPressed) {
            paddleTwoY -= 7;
            if (paddleTwoY < 0){
                paddleTwoY = 0;
            }
        }

        x += dx;
        y += dy;
        requestAnimationFrame(draw);

    }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if(e.key === "Right" || e.key === "ArrowRight") {
            rightPressed = true;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft") {
            leftPressed = true;
        } else if (e.key === "a" || e.keyCode === "65") {
            aPressed = true;
        } else if (e.key === "d" || e.keyCode === "68") {
            dPressed = true;
        } else if (e.key === "Shift" || e.keyCode === "16") {
            shiftPressed = true;
            fireDisc();
        } else if (e.key === "Enter" || e.keyCode === 13) {
            spacePressed = true;
            startGame();
        }
    }

    function keyUpHandler(e) {
        if(e.key === "Right" || e.key === "ArrowRight") {
            rightPressed = false;
        } else if(e.key === "Left" || e.key === "ArrowLeft") {
            leftPressed = false;
        } else if (e.key === "a" || e.keyCode === "65") {
            aPressed = false;
        } else if (e.key === "d" || e.keyCode === "68") {
            dPressed = false;
        } else if (e.key === "Shift" || e.keyCode === "16") {
        shiftPressed = false;
        } else if (e.key === "Enter" || e.keyCode === 32) {
            spacePressed = false;
        }
    }

    // function collisionDetection() {
    //     for(var c=0; c<brickColumnCount; c++) {
    //         for(var r=0; r<brickRowCount; r++) {
    //             var b = bricks[c][r];
    //             if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight && b.status === 1) {
    //                 dy = -dy;
    //                 b.status = 0;
    //                 playerOneScore++;
    //                 // if(score === brickRowCount*brickColumnCount) {
    //                 //     alert("A WINNER IS YOU!");
    //                 //     document.location.reload();
    //                 // }
    //             }
    //         }
    //     }
    // }

    function drawStartScreen() {
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.font = "64px Orbitron";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Press ENTER to start", canvas.width/2, canvas.height/2);
    }

    function drawTopHUD() {
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, 30);
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fill();
        ctx.closePath();
    };

    function drawLowHUD() {
        ctx.beginPath();
        ctx.rect(0, 570, canvas.width, 30);
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fill();
        ctx.closePath();
    };

    function drawP1Score() {
        ctx.font = "16px Oswald";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Player 1: "+playerOneScore, 10, 20);
    }
    function drawP2Score() {
        ctx.font = "16px Oswald";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Player 2: "+PlayerTwoScore, canvas.width-70, 20);
    }

    // function drawLives() {
    //     ctx.font = "16px Arial";
    //     ctx.fillStyle = "#0095DD";
    //     ctx.fillText("Lives: "+lives, canvas.width-65, 20);
    // }

    function startGame() {
        if (spacePressed === true){
            console.log("Spacebar pressed.")
            draw();
        }
    }

    function fireDisc() {
        drawNewBall()

        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }

        if(y + dy < ballRadius+20 || y + dy > canvas.height-ballRadius-20) {
            dy = -dy;
        }
            
        x += dx;
        y += dy;
        requestAnimationFrame(fireDisc);
    }

    // startGame();
    drawStartScreen();
}