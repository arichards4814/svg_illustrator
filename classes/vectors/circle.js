class Circle extends Vector{

    constructor(xPosition, yPosition, radius){
        super(xPosition, yPosition)
        this.radius = radius
        this.fill = "black"
        this.stroke = null
        this.stroke_width = 0
        this.svg = `
            <circle cx=${xPosition} cy=${yPosition} r=${radius} fill=${this.fill}/>
        `
    }

    get_html(){
        return this.svg
    }

    setLayer(layer){
        this.layer = layer
    }

    setColors(fill, stroke) {
        console.log(fill, stroke)
        this.fill = fill
        this.stroke = stroke
        this.rerender_svg()
    }

    setWidthHeight(radius){
        this.radius = radius - this.xPosition
        this.rerender_svg()
    }


    setStrokeWidth(newStrokeWidth) {
        this.stroke_width = newStrokeWidth
        this.rerender_svg()
    }

    rerender_svg(){
        if (this.layer) {
            this.svg = `
           <circle fill=${this.fill} id=${this.layer.name} cx=${this.xPosition} cy=${this.yPosition} r=${this.radius} stroke=${this.stroke} stroke-width=${this.stroke_width} />
         `
        } else {
            this.svg = `
           <circle fill=${this.fill} cx=${this.xPosition} cy=${this.yPosition} r=${this.radius} stroke=${this.stroke} stroke-width=${this.stroke_width} />
        `
        }
    }


}