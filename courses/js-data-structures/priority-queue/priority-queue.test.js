import { PriorityQueue } from './priority-queue'

describe('PriorityQueue', () => {
    it('should have a enqueue method', () => {
        const priorityQueue = new PriorityQueue()
        expect(typeof priorityQueue['enqueue']).toBe('function')
    })
    it('should have a size method', () => {
        const priorityQueue = new PriorityQueue()
        expect(typeof priorityQueue['size']).toBe('function')
    })
    it('size() should return the length of the queue', () => {
        const priorityQueue = new PriorityQueue()
        priorityQueue.enqueue(['a', 1])
        priorityQueue.enqueue(['b', 1])
        const size2 = priorityQueue.size()

        priorityQueue.dequeue()
        const size1 = priorityQueue.size()

        priorityQueue.enqueue(['A', 3])
        priorityQueue.enqueue(['B', 3])
        priorityQueue.enqueue(['C', 3])

        expect(size2).toBe(2)
        expect(size1).toBe(1)
        expect(priorityQueue.size()).toBe(4)
    })
    it('should have a dequeue method', () => {
        const priorityQueue = new PriorityQueue()
        expect(typeof priorityQueue['dequeue']).toBe('function')
    })
    it('dequeue() should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise', () => {
        const priorityQueue = new PriorityQueue()

        priorityQueue.enqueue(['A', 5])
        priorityQueue.enqueue(['B', 5])
        priorityQueue.enqueue(['C', 5])
        priorityQueue.enqueue(['D', 3])
        priorityQueue.enqueue(['E', 1])
        priorityQueue.enqueue(['F', 7])

        const result = []

        result.push(priorityQueue.dequeue())
        result.push(priorityQueue.dequeue())
        result.push(priorityQueue.dequeue())
        result.push(priorityQueue.dequeue())
        result.push(priorityQueue.dequeue())
        result.push(priorityQueue.dequeue())

        expect(result.join('')).toBe('EDABCF')
    })
    it('should have a front method', () => {
        const priorityQueue = new PriorityQueue()
        expect(typeof priorityQueue['front']).toBe('function')
    })
    it('front() should return the correct item at the front of the queue as items are enqueued and dequeued', () => {
        const priorityQueue = new PriorityQueue()
        priorityQueue.enqueue(['A', 5])
        const front1 = priorityQueue.front()
        priorityQueue.enqueue(['B', 5])
        const front2 = priorityQueue.front()
        priorityQueue.enqueue(['C', 5])
        const front3 = priorityQueue.front()
        priorityQueue.enqueue(['D', 3])
        const front4 = priorityQueue.front()
        priorityQueue.enqueue(['E', 1])
        const front5 = priorityQueue.front()
        priorityQueue.enqueue(['F', 7])
        const front6 = priorityQueue.front()
        expect(front1).toBe('A')
        expect(front2).toBe('A')
        expect(front3).toBe('A')
        expect(front4).toBe('D')
        expect(front5).toBe('E')
        expect(front6).toBe('E')
    })

    it('should have a isEmpty method', () => {
        const priorityQueue = new PriorityQueue()
        expect(typeof priorityQueue['isEmpty']).toBe('function')
    })
    it('isEmpty() should return true when the queue is empty', () => {
        const priorityQueue = new PriorityQueue()
        priorityQueue.enqueue({ color: 'red' })
        expect(priorityQueue.isEmpty()).toBe(false)
        priorityQueue.dequeue()
        expect(priorityQueue.isEmpty()).toBe(true)
    })
})
