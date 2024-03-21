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
    constructor(X, Y){
        this.x = X;
        this.y = Y;
    }

    move(newX, newY){
        this.x = newX;
        this.y = newY;
    }
}