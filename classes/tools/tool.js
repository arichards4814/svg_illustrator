class Tool {


    get_page_position(e) {
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