import { Game } from "./game";

window.onload = (e) => {
    const tetris = new Game()
    tetris.run()

    console.log(e.timeStamp)
}

console.log('works super!!!!!!!')