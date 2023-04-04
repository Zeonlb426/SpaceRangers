import MenuScene from "./menu.js";

export default class ExitScene {
    constructor(game) {
        this.game = game
        this.opacity = 1
        this.opacityDirection = -500
    }

    update(dt) {

        if (this.game.checkKeyPress('Escape')) {
            this.game.setScene(MenuScene);
        }

        this.opacity = this.opacity + dt / this.opacityDirection

        if (this.opacity <= 0 || this.opacity > 1 ) {
            this.opacityDirection = this.opacityDirection * -1
        }
    }

    render(dt, ctx, canvas) {
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.font = '100px Helvetica';
        ctx.fillStyle = 'red';

        ctx.fillText('GAME OVER', (canvas.width - ctx.measureText('GAME OVER').width) / 2, canvas.height / 2 - 50);

        ctx.font = '50px Helvetica';
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = this.opacity
        ctx.fillText('Press Escape return to menu', (canvas.width - ctx.measureText('Press Escape return to menu').width - 200), canvas.height - 100);
    }

}