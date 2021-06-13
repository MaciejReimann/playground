export function toWeirdCase(str) {
    const chars = [...str]
    const weirded = []

    chars.forEach((char, index) => {
        const prevChar = weirded[index - 1]
        const isFirstLetter = prevChar === ' ' || prevChar === undefined

        const isPrevCharLowerCase =
            prevChar && prevChar === prevChar.toLowerCase()

        weirded.push(
            isFirstLetter || isPrevCharLowerCase ? char.toUpperCase() : char
        )
    })

    return weirded.join('')
}
