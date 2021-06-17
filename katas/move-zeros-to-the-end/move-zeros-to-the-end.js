export function moveZerosToTheEnd(array) {
    const withoutZeros = array.filter((el) => el !== 0)
    const zerosCount = array.length - withoutZeros.length
    return [...withoutZeros, ...new Array(zerosCount).fill(0)]
}
