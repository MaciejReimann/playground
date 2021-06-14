import { Queue } from './queue'

describe('Queue', () => {
    it('should have a enqueue method', () => {
        const queue = new Queue()
        expect(typeof queue['enqueue']).toBe('function')
    })
    it('enqueue() should add element to the end of the queue', () => {
        const queue = new Queue()
        queue.enqueue(0)
        queue.enqueue(1)
        expect(queue.front()).toBe(0)
    })
    it('should have a size method', () => {
        const queue = new Queue()
        expect(typeof queue['size']).toBe('function')
    })
    it('size() should return the length of the queue', () => {
        const queue = new Queue()
        queue.enqueue('a')
        queue.enqueue('b')
        expect(queue.size()).toBe(2)
    })

    it('should have a dequeue method', () => {
        const queue = new Queue()
        expect(typeof queue['dequeue']).toBe('function')
    })
    it('dequeue() should remove and return the front element of the queue', () => {
        const queue = new Queue()
        queue.enqueue(0)
        queue.enqueue(1)
        expect(queue.dequeue()).toBe(0)
        expect(queue.size()).toBe(1)
    })
    it('should have a front method', () => {
        const queue = new Queue()
        expect(typeof queue['front']).toBe('function')
    })
    it('front() return value of the front element of the queue', () => {
        const queue = new Queue()
        queue.enqueue(0)
        queue.enqueue(1)
        expect(queue.front()).toBe(0)
    })

    it('should have a isEmpty method', () => {
        const queue = new Queue()
        expect(typeof queue['isEmpty']).toBe('function')
    })
    it('isEmpty() should return false if there are elements in the queue', () => {
        const queue = new Queue()
        queue.enqueue({ color: 'red' })
        expect(queue.isEmpty()).toBe(false)
    })
})
