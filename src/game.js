import { Loading } from "./scenes/loading"
import { Screen } from "./screen"

export class Game {
    constructor() {
        this.screen = new Screen(400, 800)
        this.scenes = {
            loading: new Loading(this)
        }
        this.currentScene = this.scenes.loading
        this.currentScene.init()
    }

    frame(time) {
        if (this.currentScene.isActive === false) {
            this.currentScene = this.scenes[this.currentScene.nextScene]
            this.currentScene.init()
        }
        this.currentScene.render(time)
        requestAnimationFrame(time => this.frame(time))
    }

    run() {
        requestAnimationFrame(time => this.frame(time))
    }
}