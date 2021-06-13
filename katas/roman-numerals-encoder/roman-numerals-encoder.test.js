import {
    convertToRoman,
    getRomanNumeralsForDigitPlace,
} from './roman-numerals-encoder'

describe('convertToRoman', () => {
    it('converts 1 to I', () => {
        expect(convertToRoman(1)).toBe('I')
    })
    it('converts 3 to III', () => {
        expect(convertToRoman(3)).toBe('III')
    })
    it('converts 4 to IV', () => {
        expect(convertToRoman(4)).toBe('IV')
    })
    it('converts 5 to V', () => {
        expect(convertToRoman(5)).toBe('V')
    })
    it('converts 7 to VII', () => {
        expect(convertToRoman(7)).toBe('VII')
    })
    it('converts 8 to VIII', () => {
        expect(convertToRoman(8)).toBe('VIII')
    })
    it('converts 9 to IX', () => {
        expect(convertToRoman(9)).toBe('IX')
    })
    it('converts 10 to X', () => {
        expect(convertToRoman(10)).toBe('X')
    })
    it('converts 11 to XI', () => {
        expect(convertToRoman(11)).toBe('XI')
    })
    it('converts 24 to XXIV', () => {
        expect(convertToRoman(24)).toBe('XXIV')
    })
    it('converts 1000 to M', () => {
        expect(convertToRoman(1000)).toBe('M')
    })
    it('converts 1001 to MI', () => {
        expect(convertToRoman(1001)).toBe('MI')
    })
    it('converts 1990 to MCMXC', () => {
        expect(convertToRoman(1990)).toBe('MCMXC')
    })
    it('converts 2003 to MMIII', () => {
        expect(convertToRoman(2003)).toBe('MMIII')
    })
    it('converts 2008 to MMVIII', () => {
        expect(convertToRoman(2008)).toBe('MMVIII')
    })
    it('converts 2599 to MMDXCIX', () => {
        expect(convertToRoman(2599)).toBe('MMDXCIX')
    })
})

describe('getRomanNumeralsForDigitPlace', () => {
    it("returns ['I', 'V', 'X'] for 1", () => {
        expect(getRomanNumeralsForDigitPlace(1)).toEqual(['I', 'V', 'X'])
    })
    it("returns ['X', 'L', 'C'] for 10", () => {
        expect(getRomanNumeralsForDigitPlace(10)).toEqual(['X', 'L', 'C'])
    })
    it("returns ['C', 'D', 'M'] for 100", () => {
        expect(getRomanNumeralsForDigitPlace(100)).toEqual(['C', 'D', 'M'])
    })
})
