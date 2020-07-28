class Illustrator {

    constructor(canvas) {
        this.active_tool = null
        this.layers = []
        this.selected_layer = null
        this.canvas = canvas
        this.color_picker_fill = "black"
        this.color_picker_stroke = "black"
        this.stroke_width = 0
    }

    change_color_picker(fill = this.color_picker_fill, stroke = this.color_picker_stroke){
        this.color_picker_fill = fill
        this.color_picker_stroke = stroke
        document.getElementById("fill").style.backgroundColor = this.color_picker_fill
        document.getElementById("stroke").style.backgroundColor = this.color_picker_stroke
    }

    update_stroke_width(new_stroke_width){
        this.stroke_width = new_stroke_width
    }

    update_fill(fill){
        this.color_picker_fill = fill
    }
    
    update_stroke(stroke){
        this.color_picker_stroke = stroke
    }

    set_active_tool(tool) {
        this.active_tool = tool
    }

    update_layer_panel(){
        let layer_panel = document.getElementById("layer_panel")
        removeAllChildNodes(layer_panel)
        this.layers.forEach(layer => {
            layer_panel.insertAdjacentHTML('afterbegin', `<p class="layers_panel_item">${layer.name}</p>`)
        })
    }

    new_layer(vector) {
        let name = "layer_" + (this.layers.length + 1).toString()
        let l = new Layer(name, vector)
        this.layers.push(l)
        this.selected_layer = l
        console.log("New layer " + name + " created.", l)
        this.update_layer_panel()
        return l
    }

    remove_layer(name){
        this.layers = this.layers.filter(layer => layer.name != name)
    }

    // delete_selected_layer(){
    //     if(this.selected_layer){
    //         this.layers = this.layers.filter(layer => layer.name != this.selected_layer.name)
    //     }
    // }

    render_layers() {
        removeAllChildNodes(this.canvas)
        this.layers.forEach(layer => {
            this.canvas.insertAdjacentHTML('afterbegin', layer.element.svg)
        })
    }

    append_html(html){
        this.canvas.insertAdjacentHTML('afterbegin', html)
    }

    change_selected(selection){
        this.selected_layer = selection
        console.log("Selected layer changed to " + selection.name)
    }

    use_tool_mousedown(e){
        if(!this.active_tool){
            console.log("No tool selected.")
        } else {
            this.active_tool.handle_click(e)
        }
    }

    use_tool_mousemove(e) {
        if (!this.active_tool) {
            console.log("No tool selected.")
        } else {
            this.active_tool.handle_mousemove(e)
        }
    }

    use_tool_mouseup(e) {
        if (!this.active_tool) {
            console.log("No tool selected.")
        } else {
            this.active_tool.handle_mouseup(e)
        }
    }

    find_layer_by_name(name){
        let found = null
        this.layers.forEach(layer => {
            if(layer.name === name){
                found = layer
            }
        })
        return found
    }

}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}