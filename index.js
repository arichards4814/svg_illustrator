let canvas = document.getElementById("canvas")
let illustrator = new Illustrator(canvas)

//for the picker
let fill_parent = document.querySelector('#fill');
let stroke_parent = document.querySelector('#stroke');
let fill_picker = new Picker(fill_parent);
let stroke_picker = new Picker(stroke_parent);
fill_picker.onChange = function (color) {
    fill_parent.style.background = color.rgbaString;

    illustrator.update_fill(color.rgbaString)
    illustrator.fill_picker_stroke = color.rgbaString;
};

stroke_picker.onChange = function (color) {
    stroke_parent.style.background = color.rgbaString;
    // illustrator.color_picker_stroke = color.rgbaString;
    illustrator.update_stroke(color.rgbaString)
    console.log(illustrator.color_picker_stroke)
};


function generate_tools(illustrator) {
    let st = new SelectionTool(illustrator)
    let rt = new RectangleTool(illustrator)
    let ct = new CircleTool(illustrator)

    let selection_button = document.getElementById("selection")
    let rectangle_button = document.getElementById("rectangle")
    let circle_button = document.getElementById("circle")

    selection_button.addEventListener("click", () => {
        illustrator.set_active_tool(st)
    })

    rectangle_button.addEventListener("click", () => {
        illustrator.set_active_tool(rt)
    })

    circle_button.addEventListener("click", () => {
        illustrator.set_active_tool(ct)
    })
    illustrator.change_color_picker("black", "black")
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
    //if the mouse is down on the canvas then do this.
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