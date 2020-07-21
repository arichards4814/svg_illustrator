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
        this.layer = null
    }

    setPosition(x, y){
        this.xPosition = x
        this.yPosition = y
        this.rerender_svg()
    }

    get_html(){
        return this.svg
    }

    setLayer(lay){
        this.layer = lay
    }

    setWidthHeight(width, height){
        this.width = width - this.xPosition
        this.height = height - this.yPosition 
        this.rerender_svg()
    }

    rerender_svg(){
        if(this.layer){
            this.svg = `
            <rect id=${this.layer.name} fill="black" x=${this.xPosition} y=${this.yPosition} width=${this.width} height=${this.height} />
        `
        } else {
            this.svg = `
            <rect fill="black" x=${this.xPosition} y=${this.yPosition} width=${this.width} height=${this.height} />
        `
        }
    }


}