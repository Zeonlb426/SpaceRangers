
export default class Hud {
    constructor(game) {
        this.game = game
    }

    update(dt) {
       
    }

    render(dt, ctx, canvas) {
        ctx.font = '30px Orbitron';
        ctx.fillStyle = '#fff';
        ctx.textAlign="right";
        ctx.fillText(this.game.score, canvas.width - 60, 40);
        ctx.textAlign="left";
    }
}