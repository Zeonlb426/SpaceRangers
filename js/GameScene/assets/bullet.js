
export default class Bullet {
    constructor(x, y) {
        this.velocity = {
            y: 25
        }
        this.power = 10
        this.image = document.getElementById("bullet");
        this.position = {
            x: x - this.image.width  / 2,
            y: y,
        }
        this.hitbox = {
            x: x - 5,
            y: y,
            w: 10,
            h: 30
        }
        this.audio = new Audio('../sound/bullet.ogg');
        this.playSound()
    }
    playSound() {
        this.audio.volume = 0.6;
        this.audio.play();
    }
    update(dt) {
        this.position.y -= this.velocity.y + dt / this.velocity.y
        this.hitbox.y = this.position.y + 15
    }
    render(dt, ctx, canvas) {
        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.position.x, this.position.y, this.image.width, this.image.height)
    }
}