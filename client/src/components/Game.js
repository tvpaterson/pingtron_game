const Pingtron = () => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");

        var x = canvas.width/2;
        var y = canvas.height-30;

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

        // var brickRowCount = 10;
        // var brickColumnCount = 15;
        // var brickWidth = 40;
        // var brickHeight = 10;
        // var brickPadding = 10;
        // var brickOffsetTop = 40;
        // var brickOffsetLeft = 30;

        // var bricks = [];
        // for(var c=0; c<brickColumnCount; c++) {
        //     bricks[c] = [];
        //     for(var r=0; r<brickRowCount; r++) {
        //         bricks[c][r] = { x: 0, y: 0, status: 1 };
        //     }
        // }

        var playerOneScore = 0;
        var PlayerTwoScore = 0;

        function drawBall() {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI*2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        };

        function drawPlayerOne() {
            ctx.beginPath();
            ctx.rect(10, paddleOneY, paddleWidth, paddleHeight);
            ctx.fillStyle = "rgb(200, 0, 0)";
            ctx.fill();
            ctx.closePath();
        };

        function drawPlayerTwo() {
            ctx.beginPath();
            ctx.rect(canvas.width-paddleWidth-10, paddleTwoY, paddleWidth, paddleHeight);
            ctx.fillStyle = "rgb(200, 0, 0)";
            ctx.fill();
            ctx.closePath();
        };

        // function drawBricks() {
        //     for(var c=0; c<brickColumnCount; c++) {
        //         for(var r=0; r<brickRowCount; r++) {
        //             if(bricks[c][r].status == 1) {
        //                 var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
        //                 var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
        //                 bricks[c][r].x = brickX;
        //                 bricks[c][r].y = brickY;
        //                 ctx.beginPath();
        //                 ctx.rect(brickX, brickY, brickWidth, brickHeight);
        //                 ctx.fillStyle = "#0095DD";
        //                 ctx.fill();
        //                 ctx.closePath();
        //             }
        //         }
        //     }
        // }

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
            } else if (e.key === "Enter" || e.key === "" || e.keyCode === 32) {
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
        //                 // if(score == brickRowCount*brickColumnCount) {
        //                 //     alert("A WINNER IS YOU!");
        //                 //     document.location.reload();
        //                 // }
        //             }
        //         }
        //     }
        // }

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
        
        startGame();

}

export default Pingtron;