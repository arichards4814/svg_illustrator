class Vector {
    constructor(xPosition, yPosition){
        this.xPosition = xPosition
        this.yPosition = yPosition
        this.layer = null
    }

    setPosition(x, y) {
        this.xPosition = x
        this.yPosition = y
        this.rerender_svg()
    }
}