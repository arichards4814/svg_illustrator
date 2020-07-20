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

    render_layers() {

    }

    append_html(html){
        this.canvas.insertAdjacentHTML('afterbegin', html)
    }

    change_selected(selection){
        this.selected_layer = selection
        console.log("Selected layer changed to " + selection.name)
    }

    use_tool(){
        if(!this.active_tool){
            console.log("No tool selected.")
        } else {
            this.active_tool.handle_click()
        }
    }

}
