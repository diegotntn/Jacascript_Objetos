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
}