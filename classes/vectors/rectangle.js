class Rectangle extends Vector{

    constructor(xPosition, yPosition, width, height){
        super(xPosition, yPosition)
        this.width = width
        this.height = height
        this.fill = "black"
        this.stroke = null
        this.stroke_width = 0
        this.svg = `
            <rect fill=${this.fill} x=${xPosition} y=${yPosition} width=${width} height=${height} />
        `
    }

    get_html(){
        return this.svg
    }

    setLayer(lay){
        this.layer = lay
    }

    setColors(fill, stroke){
        console.log(fill, stroke)
        this.fill = fill
        this.stroke = stroke
        this.rerender_svg()
    }
    

    setWidthHeight(width, height){
        this.width = width - this.xPosition
        this.height = height - this.yPosition 
        this.rerender_svg()
    }

    setStrokeWidth(newStrokeWidth){
        this.stroke_width = newStrokeWidth
        this.rerender_svg()
    }

    rerender_svg(){
        if(this.layer){
            this.svg = `
            <rect id=${this.layer.name} fill=${this.fill} stroke-width=${this.stroke_width} stroke=${this.stroke} x=${this.xPosition} y=${this.yPosition} width=${this.width} height=${this.height} />
        `
        } else {
            this.svg = `
            <rect fill=${this.fill} stroke=${this.stroke} stroke-width=${this.stroke_width} x=${this.xPosition} y=${this.yPosition} width=${this.width} height=${this.height} />
        `
        }
    }


}