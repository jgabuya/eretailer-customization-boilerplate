class IOCContainer {
    constructor() {
        this.services = {}
    }

    /**
     * Sets a value under a key
     * @param {string} key 
     * @param {*} val 
     */
    register(key, val) {
        if (this._keyExists(key)) {
            throw `IOCContainer: You are trying to register ${key} as ${val}, but it is already set as ${this.services[key]}`
        }

        this.services[key] = val
    }

    /**
     * Retrieves a key value
     * @param {string} key 
     */
    get(key) {
        if (! this._keyExists(key)) {
            throw `IOCContainer: The key '${key}' does not exist!`
        }

        return this.services[key]
    }

    _keyExists(key) {
        return this.services[key] !== undefined
    }
}

export default IOCContainer