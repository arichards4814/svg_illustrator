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

    setWidthHeight(width, height){
        this.width = width - this.xPosition
        this.height = height - this.yPosition 
        this.rerender_svg()
    }

    rerender_svg(){
        this.svg = `
            <rect fill="black" x=${this.xPosition} y=${this.yPosition} width=${this.width} height=${this.height} />
        `
    }


}