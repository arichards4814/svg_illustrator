

let canvas = document.getElementById("canvas")
let illustrator = new Illustrator(canvas)


function generate_tools(illustrator) {
    let st = new SelectionTool(illustrator)
    let rt = new RectangleTool(illustrator)

    illustrator.set_active_tool(rt)
}
generate_tools(illustrator)


canvas.addEventListener("click", (e) => {
    //use the tool that is selected. 
    console.log(e.clientX)
    console.log(e.clientY)
    illustrator.use_tool()
    console.log(illustrator.layers)
})
console.log(canvas)