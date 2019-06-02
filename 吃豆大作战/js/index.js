var row = 4;
var column = 6;
var container = document.getElementsByClassName("container")[0];
    
document.addEventListener("keydown", function(e){
    if(e.code === "ArrowUp"){
        console.log(1)
        var pacman = container.children[row].children[column];
        var upDiv = container.children[row-1].children[column];
        if (upDiv.className !=="wall") {
            pacman.className = "ground";
            upDiv.className = "pacman up";
            row = row - 1;
        }
       
    }else if(e.code ==="ArrowDown") {
        console.log(2)
        var pacman = container.children[row].children[column];
        var downDiv = container.children[row+1].children[column];
        if (downDiv.className !=="wall"){
            pacman.className = "ground";
            downDiv.className = "pacman down";
            row = row + 1;
        }
    }else if(e.code === "ArrowLeft") {
        console.log(3)
        var pacman = container.children[row].children[column];
        var leftDiv = container.children[row].children[column-1];
        if(leftDiv.className !=="wall"){
            pacman.className = "ground";
            leftDiv.className = "pacman left";
            column = column - 1;
        }
    }else if(e.code === "ArrowRight") {
        console.log(4)
        var pacman = container.children[row].children[column];
        var rightDiv = container.children[row].children[column+1];
        if(rightDiv.className !=="wall"){
            pacman.className = "ground";
            rightDiv.className = "pacman right";
            column = column + 1;
        }
        
    }
})