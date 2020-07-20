class Rectangle{

    constructor(xPosition, yPosition, width, height){
        this.xPosition = xPosition
        this.yPosition = yPosition
        this.width = width
        this.height = height
        this.fill = "black"
        this.stroke = null
        this.svg = `
            <rect fill="black" x=${xPosition} y=${yPosition} width=${width} height=${height} />
        `
    }

    get_html(){
        return this.svg
    }


}