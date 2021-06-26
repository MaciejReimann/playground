import { CircularQueue } from './circular-queue'

describe('CircularQueue', () => {
    it('should have a enqueue method', () => {
        const queue = new CircularQueue()
        expect(typeof queue['enqueue']).toBe('function')
    })
    describe('enqueue()', () => {
        it('should add item to the queue', () => {
            const queue = new CircularQueue(3)
            queue.enqueue(0)
            queue.enqueue(1)
            queue.enqueue(2)
            expect(queue.queue[0]).toBe(0)
            expect(queue.queue[1]).toBe(1)
            expect(queue.queue[2]).toBe(2)
        })

        it('should return the enqueued item if it is successful; otherwise it will return null', () => {
            const queue = new CircularQueue(3)
            expect(queue.enqueue(0)).toBe(0)
        })

        it('should not enqueue items past the read pointer', () => {
            const queue = new CircularQueue(3)
            queue.enqueue(0)
            queue.enqueue(1)
            queue.enqueue(2)
            queue.enqueue(3)
            expect(queue.queue[0]).toBe(0)
        })

        // it('should start adding items from the beginning once it reaches the end of the queue and does not pass the read pointer', () => {
        //     const queue = new CircularQueue(3)
        //     queue.enqueue(0)
        //     queue.enqueue(1)
        //     queue.enqueue(2)
        //     queue.enqueue(3)
        //     expect(queue.queue[0]).toBe(3)
        //     expect(queue.queue[1]).toBe(1)
        //     expect(queue.queue[2]).toBe(2)
        // })
    })

    it('should have a dequeue method', () => {
        const queue = new CircularQueue(3)
        expect(typeof queue['dequeue']).toBe('function')
    })

    describe('dequeue()', () => {
        it('should dequeue items from the queue, one by one', () => {
            const queue = new CircularQueue(3)
            queue.enqueue(0)
            queue.enqueue(1)
            queue.enqueue(2)

            expect(queue.dequeue()).toBe(0)
            expect(queue.dequeue()).toBe(1)
            expect(queue.dequeue()).toBe(2)
        })

        it('should reset the item to `null`, after the item is dequeued.', () => {
            const queue = new CircularQueue(3)
            queue.enqueue(0)
            queue.enqueue(1)
            queue.enqueue(2)

            queue.dequeue()
            queue.dequeue()
            expect(queue.queue[0]).toBe(null)
            expect(queue.queue[1]).toBe(null)
            expect(queue.queue[2]).toBe(2)
        })
    })
    it('should have a dequeue method', () => {
        const queue = new CircularQueue(3)
        queue.enqueue(0)
        queue.enqueue(1)
        queue.enqueue(2)

        expect(queue.dequeue()).toBe(0)
        expect(queue.dequeue()).toBe(1)
        expect(queue.dequeue()).toBe(2)

        expect(queue.dequeue()).toBe(null)
        expect(queue.dequeue()).toBe(null)
        expect(queue.dequeue()).toBe(null)

        queue.enqueue(100)
        expect(queue.dequeue()).toBe(100)
    })
})
