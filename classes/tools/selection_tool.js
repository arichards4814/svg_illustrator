class SelectionTool extends Tool {

    constructor(illustrator){
        super()
        this.illustrator = illustrator
    }


    handle_click(e){
        console.log(e.target)
        if(e.target.name === "canvas"){
            // clear selection
        } else {
            let layer = this.illustrator.find_layer_by_name(e.target.id)
            this.illustrator.change_selected(layer)
            console.log("Found Layer: " + layer.name)
        }
    }

    handle_mousemove(e) {

        let offset = this.get_page_position(e)
        this.illustrator.selected_layer.element.setPosition(offset.x, offset.y)
    }

    handle_mouseup(e) {
    }


    
}