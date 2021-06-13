export function convertToRoman(n) {
    const stringifiedInt = String(n)
    const digitsInNumberReversed = stringifiedInt
        .split('')
        .reverse()
        .map(Number)

    const resultCompounds = []

    for (let i = 0; i < stringifiedInt.length; i++) {
        const digitPlace = 10 ** i
        const digit = digitsInNumberReversed[i]

        const romanNumeralsForDigitPlace =
            getRomanNumeralsForDigitPlace(digitPlace)

        const placeValueInRoman = encodeForDigitPlace(
            digit,
            romanNumeralsForDigitPlace
        )
        placeValueInRoman && resultCompounds.push(placeValueInRoman)
    }

    return resultCompounds.reverse().join('')
}

function encodeForDigitPlace(n, range) {
    const [A, B, C] = range

    const encodeOneToFive = (n, { first, second }) => {
        if (n === 5) return second
        if (n === 4) return first + second
        return new Array(n).fill(first).join('')
    }

    if (n <= 5) {
        return encodeOneToFive(n, { first: A, second: B })
    }
    if (n <= 8) {
        return B + encodeOneToFive(n - 5, { first: A, second: C })
    }
    return encodeOneToFive(n - 5, { first: A, second: C })
}

export function getRomanNumeralsForDigitPlace(digitPlace) {
    const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    const digitPlaceLength = String(digitPlace).length

    const sliceStarts = new Array(digitPlaceLength)
        .fill('')
        .map((n, i) => i * 2)
    const start = sliceStarts[digitPlaceLength - 1]

    const romanSymbols = romanNumerals.slice(start, start + 3)

    return romanSymbols
}
