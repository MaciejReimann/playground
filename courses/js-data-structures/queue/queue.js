// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-queue-class
// they follow the FIFO (First-In First-Out) principle - only the item at the front of the queue is allowed to be removed.
// we want to limit the amount of control we have over our queues - that's why Queue instead of an Array

export function Queue() {
    var collection = []

    this.enqueue = function (item) {
        collection.push(item)
    }

    this.dequeue = function () {
        return collection.shift()
    }

    this.size = function () {
        return collection.length
    }

    this.front = function () {
        return collection[0]
    }

    this.isEmpty = function () {
        return collection.length === 0
    }
}
