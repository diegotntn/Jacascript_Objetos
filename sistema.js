class Size{
    constructor(Width = 80,Height = 60){
        this.width = Width;
        this.height = Height;
    }

    resize(newWidth,newHeight){
        this.width = newWidth;
        this.height = newHeight;
    }
}

class Position{
    constructor(X = 0, Y = 0){
        this.x = X;
        this.y = Y;
    }

    move(newX, newY){
        this.x = newX;
        this.y = newY;
    }
}

class ProgramWindow{
    constructor (){
        this.screenSize = new Size(800,600);
        this.size = new Size();
        this.position = new Position()
    }

    resizeProgramWindow(newSize){
        let newWidth = Math.max(1, newSize.width);
        let newHeight = Math.max(1, newSize.height);

        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;

        newWidth = Math.min(newWidth, maxWidth);
        newHeight = Math.min(newHeight, maxHeight);

        this.size.width(newWidth);
        this.size.height(newHeight);
    }

    moveProgramWindow(newPosition) {
        let newX = Math.max(0, newPosition.x);
        let newY = Math.max(0, newPosition.y);

        const maxX = this.screenSize.width - this.size.width;
        const maxY = this.screenSize.height - this.size.height;

       
        newX = Math.min(newX, maxX);
        newY = Math.min(newY, maxY);

        this.position.x = newX;
        this.position.y = newY;
    }

}

function changeWindow(window) {
    const newSize = new Size(400, 300);
    const newPosition = new Position(100, 150);

    window.resizeProgramWindow(newSize);
    window.moveProgramWindow(newPosition);

    return window;
}

const programWindow = new ProgramWindow();
console.log(programWindow.screenSize.width);