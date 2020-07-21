class Circle{

    constructor(xPosition, yPosition, radius){
        this.xPosition = xPosition
        this.yPosition = yPosition
        this.radius = radius
        this.fill = "black"
        this.stroke = null
        this.svg = `
            <circle cx=${xPosition} cy=${yPosition} r=${radius} fill="black" />
        `
        this.layer = null
    }

    get_html(){
        return this.svg
    }

    setLayer(layer){
        this.layer = layer
    }

    setWidthHeight(radius){
        this.radius = radius - this.xPosition
        this.rerender_svg()
    }

    rerender_svg(){
        this.svg = `
            <circle cx=${this.xPosition} cy=${this.yPosition} r=${this.radius} fill="black" />
        `
    }


}