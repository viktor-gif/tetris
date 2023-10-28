import { Scene } from "../scene";

export class Loading extends Scene {
    constructor(game) {
        super(game)
        this.nextScene = "menu"
    }

    render(time) {
        // console.log('test___')
        this.game.screen.fill("green")
        super.render(time)
    }
}