import { removeFirstAndLastChar } from './removeFirstAndLastChar'

describe('removeFirstAndLastChar', () => {
    it('Fixed Tests', () => {
        expect(removeFirstAndLastChar('eloquent')).toBe('loquen')
        expect(removeFirstAndLastChar('country')).toBe('ountr')
        expect(removeFirstAndLastChar('person')).toBe('erso')
        expect(removeFirstAndLastChar('place')).toBe('lac')
        expect(removeFirstAndLastChar('ooopsss')).toBe('oopss')
        expect(removeFirstAndLastChar('o')).toBe('')
        expect(removeFirstAndLastChar('oo')).toBe('')
    })
})
