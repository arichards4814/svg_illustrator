class SelectionTool extends Tool {

    constructor(illustrator){
        super()
        this.illustrator = illustrator
        this.initial_position = null
    }


    handle_click(e){
        console.log(e.target)
        if(e.target.name === "canvas"){
            // clear selection
        } else {
            let layer = this.illustrator.find_layer_by_name(e.target.id)
            this.illustrator.change_selected(layer)
            this.initial_position = {
                x: layer.element.xPosition,
                y: layer.element.yPosition 
            }
            console.log("Found Layer: " + layer.name)
        }
    }

    handle_mousemove(e) {
        let initialX = this.initial_position.x
        let initialY = this.initial_position.y
        // console.log(initialX, initialY)
        //trying to get it to move at the correct position
        let offset = this.get_page_position(e)
        this.illustrator.selected_layer.element.setPosition(offset.x, offset.y)
    }

    handle_mouseup(e) {
        this.initial_position = null
        //yes
    }


    
}