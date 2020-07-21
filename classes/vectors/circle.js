class Circle extends Vector{

    constructor(xPosition, yPosition, radius){
        super(xPosition, yPosition)
        this.radius = radius
        this.fill = "black"
        this.stroke = null
        this.svg = `
            <circle cx=${xPosition} cy=${yPosition} r=${radius} fill="black" />
        `
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
        if (this.layer) {
            this.svg = `
           <circle id=${this.layer.name} cx=${this.xPosition} cy=${this.yPosition} r=${this.radius} fill="black" />
         `
        } else {
            this.svg = `
           <circle cx=${this.xPosition} cy=${this.yPosition} r=${this.radius} fill="black" />
        `
        }
    }


}