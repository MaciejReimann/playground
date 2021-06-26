// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-circular-queue
// a queue that writes to the end of a collection then begins overwriting itself at the beginning of the collection.
// we want to limit the amount of control we have over our queues - that's why Queue instead of an Array

export class CircularQueue {
    constructor(size) {
        this.queue = []
        this.readIndex = 0
        this.writeIndex = 0
        this.maxIndex = size - 1

        while (size > 0) {
            this.queue.push(null)
            size--
        }
    }

    enqueue(item) {
        if (this.queue[this.writeIndex] === null) {
            this.queue[this.writeIndex++] = item

            if (this.writeIndex > this.maxIndex) {
                this.writeIndex = 0
            }
            return item
        }
        return null
    }

    dequeue() {
        if (this.queue[this.readIndex] !== null) {
            const item = this.queue[this.readIndex]

            this.queue[this.readIndex++] = null

            if (this.readIndex > this.maxIndex) {
                this.readIndex = 0
            }
            return item
        }
        return null
    }
}
