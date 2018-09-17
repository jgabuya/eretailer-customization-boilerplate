import IOCContainer from '../../../src/lib/ioc-container';

describe('#IOC Container', () => {
    let container;

    beforeAll(() => {
        container = new IOCContainer()

        container.register('key1', 'hello')
        container.register('key2', {
            name: 'Bob',
            age: 21
        })
        container.register('key3', ['one', 'two', 'three'])
    })

    it('Retrieves stored key values', () => {
        expect(container.get('key1')).toBe('hello')

        expect(typeof(container.get('key2'))).toBe('object')
        expect(container.get('key2')).toEqual({
            age: 21,
            name: 'Bob'
        })

        expect(typeof container.get('key3')).toBe('object')
        expect(container.get('key3')).toContain('one')
        expect(container.get('key3')).toContain('two')
        expect(container.get('key3')).toContain('three')
    })

    it('Checks if a key exists', () => {
        expect(container._keyExists('key1')).toBe(true)
        expect(container._keyExists('key4')).toBe(false)
    })

    it('Throws an exception when a key you are trying to set already exists', () => {
        expect(() => {
            container.register('key2', 'whatever')
        }).toThrow()
    })

    it('Throws an exception when a key you are trying to retrieve doesn\'t exist', () => {
        expect(() => {
            container.get('notexisting')
        }).toThrow()
    })
})