class Illustrator {

    constructor(canvas) {
        this.active_tool = null
        this.layers = []
        this.selected_layer = null
        this.canvas = canvas
    }

    set_active_tool(tool) {
        this.active_tool = tool
    }

    new_layer(vector) {
        let name = "layer_" + (this.layers.length + 1).toString()
        let l = new Layer(name, vector)
        this.layers.push(l)
        this.selected_layer = l
        console.log("New layer " + name + " created.", l)
        console.log("Current selected layer " + l.name)
    }

    remove_layer(name){
        this.layers = this.layers.filter(layer => layer.name != name)
        
    }

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

}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}