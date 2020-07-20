class RectangleTool{

    constructor(illustrator) {
        this.illustrator = illustrator
    }

    handle_click(){
        let newRT = new Rectangle(0, 0, 100, 150)
        this.illustrator.new_layer(newRT)
        this.illustrator.append_html(newRT.get_html())
        console.log("New Rectangle created : " + newRT )
    }

}