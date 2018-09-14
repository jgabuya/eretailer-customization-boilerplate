class IOCContainer {
    constructor() {
        this.services = {}
    }

    register(key, val) {
        if (this.keyExists(key)) {
            throw `You are trying to register ${key} as ${val}, but it is already set as ${this.services[key]}`
        }

        this.services[key] = val
    }

    get(key) {
        if (! this.keyExists(key)) {
            throw `${key} does not exist!`
        }
    }

    keyExists(key) {
        return this.services.key !== undefined
    }
}

export default IOCContainer