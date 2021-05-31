// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-stack-class
// Although you can use arrays to create stacks (Last-In-First-Out type of service),
// sometimes it is best to limit the amount of control we have with our stacks

export function Stack() {
    var collection = []

    this.print = function () {
        console.log(collection)
    }

    this.push = function (element) {
        collection.push(element)
    }

    this.pop = function () {
        return collection.pop()
    }

    this.peek = function () {
        return collection[collection.length - 1]
    }

    this.isEmpty = function () {
        return collection.length === 0
    }

    this.clear = function () {
        collection = []
    }
}
