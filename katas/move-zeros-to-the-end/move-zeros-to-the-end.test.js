import { moveZerosToTheEnd } from './move-zeros-to-the-end'

describe('moveZerosToTheEnd', () => {
    const originalArray = [false, 1, 0, 1, 2, 0, 0, 0, 1, 3, 'a']
    const modifiedArray = [false, 1, 1, 2, 1, 3, 'a', 0, 0, 0, 0]
    it('moves zeros to the end of the array, preserving the order of the other elements', () => {
        expect(moveZerosToTheEnd(originalArray)).toEqual(modifiedArray)
    })
    it('does not change the length of the array', () => {
        expect(originalArray.length).toEqual(modifiedArray.length)
    })
})
