import IntroScene from "./intro.js"
import GameScene from "./game.js"
import ExitScene from "./exit.js"
import Stars from "./stars.js"

export default class MenuScene {
    constructor(game) {
        this.game = game
        this.opacityDirection = 500
        this.menuActiveOpacity = 0
        this.menuIndex = 0
        this.menuTitle = 'Game Menu'
        this.menuItems = [
            'Start game',
            'Intro scene',
            'Exit'
        ]
        this.stars = []
        for (let i = 0; i < 500; i++){
            this.stars.push(new Stars(Math.random() * this.game.canvas.width,  Math.random() * this.game.canvas.height))
        }
    }

    update(dt) {

        let opacityValue = this.menuActiveOpacity + dt / this.opacityDirection

        if (opacityValue > 1 || opacityValue < 0 ) this.opacityDirection *= -1

        this.menuActiveOpacity += dt / this.opacityDirection

        if (this.game.checkKeyPress('ArrowDown')) {
            this.menuIndex++
            this.menuIndex = this.menuIndex % this.menuItems.length

        }else if (this.game.checkKeyPress('ArrowUp')) {
            
            this.menuIndex--
            if (this.menuIndex < 0) this.menuIndex = this.menuItems.length -1;
        }

        if (this.game.checkKeyPress('Enter')) {
            switch(this.menuIndex) {
                case 0: this.game.setScene(GameScene);break
                case 1: this.game.setScene(IntroScene);break
                case 2: this.game.setScene(ExitScene);break
            }
        }
    }

    render(dt, ctx, canvas) {

    

        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        this.stars.forEach(
            (star, index) => {
                star.render(dt, ctx, canvas)
            }
        )

        ctx.font = '60px Helvetica'
        ctx.textBaseline = 'top';
        ctx.fillStyle = '#ffffff'
        ctx.fillText(this.menuTitle, (canvas.width - ctx.measureText(this.menuTitle).width) / 2, 40)

        const itemHeight = 50, fontSize = 30
        ctx.font = fontSize + 'px Helvetica'

        for (const [index, item] of this.menuItems.entries()) {
            if (index === this.menuIndex) {
                ctx.globalAlpha = this.menuActiveOpacity
                ctx.fillStyle = '#089cd3'
                ctx.fillRect(0, canvas.height / 2 + index * itemHeight, canvas.width,  itemHeight)
            }

            ctx.globalAlpha = 1
            ctx.fillStyle = '#fff'
            ctx.fillText(
                item,
                (canvas.width - ctx.measureText(item).width) / 2,
                canvas.height / 2 + index * itemHeight + (itemHeight - fontSize) / 2
            )
        }
    }

}
