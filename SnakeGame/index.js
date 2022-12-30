// board

var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

// snake head
var snakeX = blockSize * 5 ;// snake start x-point
var snakeY  = blockSize * 5 ;// snake start Y-point

// movement of Snake
var velocityX = 0; 
var velocityY = 0;


// food 
var foodX ;
var foodY  ;

  // GameOver
  var gameOver = false;

// increase snake body after collide with food

// snakeBody array;
var snakeBody = []




// when page Loads 
window.onload = function(){
    board  = document.getElementById("board");
    // overall board dimensions
    board.height = rows*blockSize;
    board.width = rows*blockSize;

    // used for drawing on the baord
    context = board.getContext("2d");
    placeFood();
    document.addEventListener("keyup", changeDirection);
    // update();
    setInterval(update, 1000/8); // ten times a second
}

function update(){

    if(gameOver){
        return;
    }



    // filling color
    // fillRect(x, y, width , height)

    // for board
    context.fillStyle = "black";
    
    context.fillRect(0,0,board.width, board.height);

    

    // for food 
    context.fillStyle = 'red';
    context.fillRect(foodX, foodY ,  blockSize, blockSize);

  


    // if they collide
    if(snakeX == foodX && snakeY==foodY){
        snakeBody.push([foodX,foodY])
        placeFood();
    }

    for(let i = snakeBody.length-1; i>0;i--){
        snakeBody[i] = snakeBody[i-1];
    }

    if(snakeBody.length){
        snakeBody[0] = [snakeX, snakeY];
    }


    // for snake 
    context.fillStyle = "lime";
    snakeX +=velocityX*blockSize;
    snakeY +=velocityY*blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);



    // snakeBody can contain multiple array of (food->x,y)
    // for example Snake eat 5 food then we have 5 array

    // SnakeBody[[x1,y1], [x2,y2], [x3,y3],[x4,y4]] 

    // to fetch 3food x,y pos -> (SnakeBody[2][0], SnakeBody[2][1]);
    for(let i=0; i< snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize,blockSize );
    }
    //game over conditions
    if(snakeX<0 || snakeX> cols*blockSize || snakeY<0 || snakeY>rows*blockSize){
        gameOver = true;
        alert("Game Over")
    }
    for(let i=0; i<snakeBody.length; i++){
        if(snakeX==snakeBody[i][0] && snakeY== snakeBody[i][1]){
            gameOver = true;
            alert("Game Over");
        }
    }
}


function changeDirection(e){
    if(e.code=='ArrowUp' && velocityY!=1){
        velocityX = 0; 
        velocityY = -1;
    }
    else if(e.code=='ArrowDown' && velocityY!=-1){
        velocityX = 0; 
        velocityY = 1;
    }
    else if(e.code=='ArrowLeft' && velocityX!=1){
        velocityX = -1; 
        velocityY = 0;
    }
    else if(e.code=='ArrowRight' && velocityX!=-1){
        velocityX = 1; 
        velocityY = 0;
    }

}


// Food will randomly take places
function placeFood(){
    //maths.random give randomly (0 and 1)x20 -> 0-20*blockSize(25)
    foodX = Math.floor(Math.random()*cols)*blockSize;
    foodY = Math.floor(Math.random()*rows)*blockSize;    
}