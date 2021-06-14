// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-priority-queue-class
// a special type of Queue in which items may have additional information which specifies their priority
// Item priority will override placement order in determining the sequence items are dequeued.

export function PriorityQueue() {
    const collection = []

    const getPriority = (item) => {
        return item[1]
    }
    const getValue = (item) => {
        return item[0]
    }
    const getFirstItem = () => {
        return collection[0]
    }
    const isItemOfLowerPriority = (item) => {
        return getPriority(item) >= getPriority(getFirstItem())
    }

    this.enqueue = function (item) {
        this.isEmpty() || isItemOfLowerPriority(item)
            ? collection.push(item)
            : collection.unshift(item)
    }

    this.dequeue = function () {
        const firstItem = collection.shift()
        return getValue(firstItem)
    }

    this.size = function () {
        return collection.length
    }

    this.front = function () {
        const firstItem = getFirstItem()
        return getValue(firstItem)
    }

    this.isEmpty = function () {
        return collection.length === 0
    }
}
