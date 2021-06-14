import { Queue } from './queue'

describe('Queue', () => {
    it('should have a enqueue method', () => {
        const queue = new Queue()
        expect(queue.hasOwnProperty('enqueue')).toBe(true)
    })
    it('enqueue() should add element to the end of the queue', () => {
        const queue = new Queue()
        queue.enqueue(0)
        queue.enqueue(1)
        expect(queue.front()).toBe(0)
    })
    it('should have a size method', () => {
        const queue = new Queue()
        expect(queue.hasOwnProperty('size')).toBe(true)
    })
    it('size() should return the length of the queue', () => {
        const queue = new Queue()
        queue.enqueue('a')
        queue.enqueue('b')
        expect(queue.size()).toBe(2)
    })

    it('should have a dequeue method', () => {
        const queue = new Queue()
        expect(queue.hasOwnProperty('dequeue')).toBe(true)
    })
    it('dequeue() should remove and return the front element of the queue', () => {
        const queue = new Queue()
        queue.enqueue(0)
        queue.enqueue(1)
        expect(queue.dequeue()).toBe(0)
    })
    it('should have a front method', () => {
        const queue = new Queue()
        expect(queue.hasOwnProperty('front')).toBe(true)
    })
    it('front() return value of the front element of the queue', () => {
        const queue = new Queue()
        queue.enqueue(0)
        queue.enqueue(1)
        expect(queue.front()).toBe(0)
    })

    it('should have a isEmpty method', () => {
        const queue = new Queue()
        expect(queue.hasOwnProperty('isEmpty')).toBe(true)
    })
    it('isEmpty() should return false if there are elements in the queue', () => {
        const queue = new Queue()
        queue.enqueue({ color: 'red' })
        expect(queue.isEmpty()).toBe(false)
    })
})
