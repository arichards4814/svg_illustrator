let canvas = document.getElementById("canvas")
let illustrator = new Illustrator(canvas)


function generate_tools(illustrator) {
    let st = new SelectionTool(illustrator)
    let rt = new RectangleTool(illustrator)

    let selection_button = document.getElementById("selection")
    let rectangle_button = document.getElementById("rectangle")

    selection_button.addEventListener("click", () => {
        illustrator.set_active_tool(st)
    })

    rectangle_button.addEventListener("click", () => {
        illustrator.set_active_tool(rt)
    })
}
generate_tools(illustrator)


let isDrawing = false

canvas.addEventListener("mousedown", (e) => {
    //enact the mouse down of the current tool

    illustrator.use_tool_mousedown(e)
    illustrator.render_layers()
    isDrawing = true
})

canvas.addEventListener("mousemove", (e) => {
    if(isDrawing){
        illustrator.use_tool_mousemove(e)
        illustrator.render_layers()
    }
})

canvas.addEventListener("mouseup", (e) => {
    //enact the mouse up of the current tool

    illustrator.use_tool_mouseup(e)
    illustrator.render_layers()
    isDrawing = false
})


console.log(canvas)