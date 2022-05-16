class EVController {
    constructor() {
        this.container = document.querySelector('.container')
        this.glass = document.querySelector('#glass')
        this.audio = document.querySelector('audio')

        this.glass_state = 0
        this.glass.addEventListener('click', () => this.handle_glass_click())
    }

    handle_glass_click() {
        this.glass_state += 1

        if (this.glass_state === 3) {
            this.initiate_vibe()
            return
        } else if (this.glass_state > 3) {
            return
        }

        this.glass.src = `assets/glass-${this.glass_state}.svg`
        this.glass.alt = `glass broken step ${this.glass_state}`
    }

    initiate_vibe() {
        this.glass.src = `assets/hibiscus.png`
        this.glass.alt = `a hibiscus`
        this.glass.classList.add('vibe')
        this.glass.title = `vibe initiated`

        this.container.classList.add('vibe')

        document.querySelector(`link[rel~='icon']`).href = `assets/hibiscus.png`

        this.audio.play()

    }
}

window.evc = new EVController()
