// create constant canvas from canvas html element
const canvas = document.querySelector('canvas')
// create constant canvasContext from canvas as 2s
const c = canvas.getContext('2d')

// adjust canvas size
canvas.width = 1024
canvas.height = 576

// adjusts canvas location in browser
c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.2

// default sprite with position velocity
class Sprite {
    // wrap arguments for clean and management
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.height = 150
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    // to begin moving the sprites
    update() {
        this.draw()
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else {
            // only if both entities are above canvas height
            this.velocity.y += gravity
        }
    }
}

const player = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})

const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }
})

console.log(player)

// animate the game
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()
}

animate()