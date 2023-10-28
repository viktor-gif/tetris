export class Screen {
    constructor(width, height) {
        this.width = width
        this.heiht = height
        this.canvas = this.createCanvas()
        this.canvas.width = width
        this.canvas.height = height
        this.ctx = this.canvas.getContext('2d')
    }

    createCanvas() {
        let elements = document.getElementsByTagName('canvas')
        if (elements.length > 0) {
            return elements[0]
        }
        let canvas = document.createElement('canvas')
        document.body.appendChild(canvas)
        return(canvas)
    }

    fill(color) {
        //console.log(this.ctx)
        this.ctx.fillStyle = color
        this.ctx.fillRect(0, 0, this.width, this.heiht)
    }
}