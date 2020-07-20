class RectangleTool{

    constructor(illustrator) {
        this.illustrator = illustrator
        this.currentRect = null
    }

    handle_click(e){

        let offset = this.get_page_position(e)
        let newRT = new Rectangle(offset.x, offset.y, 0, 0)
        this.illustrator.new_layer(newRT)
        this.currentRect = newRT

        console.log("New Rectangle created : " + newRT )
    }

    handle_mousemove(e){
        let offset = this.get_page_position(e)
        this.currentRect.setWidthHeight(offset.x, offset.y)
    }

    handle_mouseup(e){
        let offset = this.get_page_position(e)
        this.currentRect.setWidthHeight(offset.x, offset.y)
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