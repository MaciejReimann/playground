// Source: https://livecodestream.dev/post/awesome-javascript-one-liners-to-look-like-a-pro/

function findLongestWord(str) {
    return str
        .split(' ')
        .reduce(
            (longest, word) => (word.length > longest.length ? word : longest),
            ''
        )
}
