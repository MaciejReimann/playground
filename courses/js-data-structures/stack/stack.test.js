import { Stack } from './stack'

describe('Stack', () => {
    it('should have a push method', () => {
        const stack = new Stack()
        expect(stack.hasOwnProperty('push')).toBe(true)
    })
    it('should have a pop method', () => {
        const stack = new Stack()
        expect(stack.hasOwnProperty('pop')).toBe(true)
    })
    it('pop() should remove and return the top element of the stack', () => {
        const stack = new Stack()
        stack.push('a')
        expect(stack.pop()).toBe('a')
    })
    it('should have a peek method', () => {
        const stack = new Stack()
        expect(stack.hasOwnProperty('peek')).toBe(true)
    })
    it('peek() should return the top element of the stack', () => {
        const stack = new Stack()
        stack.push(0)
        stack.push(1)
        expect(stack.peek()).toBe(1)
    })
    it('should have a isEmpty method', () => {
        const stack = new Stack()
        expect(stack.hasOwnProperty('isEmpty')).toBe(true)
    })
    it('isEmpty() should return true if a stack does not contain any elements', () => {
        const stack = new Stack()
        expect(stack.isEmpty()).toBe(true)
    })
    it('should have a clear method', () => {
        const stack = new Stack()
        expect(stack.hasOwnProperty('clear')).toBe(true)
    })
    it('clear() should remove all element from the stack', () => {
        const stack = new Stack()
        stack.push('a')
        stack.push('b')
        stack.clear()
        expect(stack.isEmpty()).toBe(true)
    })
})
