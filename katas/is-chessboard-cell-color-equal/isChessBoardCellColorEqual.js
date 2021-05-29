// Source: https://www.codewars.com/kata/5894134c8afa3618c9000146

export function isChessBoardCellColorEqual(cell1, cell2) {
    return areBothCellsBlack(cell1, cell2) || areBothCellsWhite(cell1, cell2)
}

function areBothCellsBlack(cell1, cell2) {
    return isCellBlack(cell1) && isCellBlack(cell2)
}

function areBothCellsWhite(cell1, cell2) {
    return !isCellBlack(cell1) && !isCellBlack(cell2)
}

function isCellBlack(cell) {
    const ansiCodeForLetter = cell.charCodeAt(0)
    const ansiCodeForNumber = cell.charCodeAt(1)

    // The sum of ansiCodeForLetter and ansiCodeForNumber
    // is even for black cells and odd for white cells, so:

    return isEven(ansiCodeForLetter + ansiCodeForNumber)
}

function isEven(num) {
    return !(num % 2)
}
