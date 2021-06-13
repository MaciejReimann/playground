import { isUpperCase, toWeirdCase } from './to-weird-case'

describe('toWeirdCase', () => {
    it('should return the correct value for a single word "This"', () => {
        expect(toWeirdCase('This')).toBe('ThIs')
    })
    it('should return the correct value for a single word "is', () => {
        expect(toWeirdCase('is')).toBe('Is')
    })
    it('should return the correct value for multiple words', () => {
        expect(toWeirdCase('This is a test')).toBe('ThIs Is A TeSt')
    })
})
