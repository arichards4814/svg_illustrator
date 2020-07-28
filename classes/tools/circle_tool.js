class CircleTool extends Tool{

    constructor(illustrator) {
        super()
        this.illustrator = illustrator
        this.currentRect = null
    }

    handle_click(e){
        let offset = this.get_page_position(e)
        let newRT = new Circle(offset.x, offset.y, 0)
        newRT.setColors(this.illustrator.color_picker_fill, this.illustrator.color_picker_stroke)
        newRT.setStrokeWidth(this.illustrator.stroke_width)
        let newLayer = this.illustrator.new_layer(newRT)
        newRT.setLayer(newLayer)
        this.currentRect = newRT

        console.log("New Circle created : " + newRT )
    }

    handle_mousemove(e){
        let offset = this.get_page_position(e)
        this.currentRect.setWidthHeight(offset.x)
    }

    handle_mouseup(e){
        let offset = this.get_page_position(e)
        this.currentRect.setWidthHeight(offset.x)
        this.currentRect = null
    }

    get_page_position(e){
        let offsets = this.illustrator.canvas.getBoundingClientRect()

        let offsetX = e.clientX - offsets.left
        let offsetY = e.clientY - offsets.top

        console.log(e.clientX, e.clientY, offsets.left, offsets.top)
        return {
            x: offsetX,
            y: offsetY
        }
    }

}