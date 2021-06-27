export function getTeamStatistics(stat) {
    if (!stat.length) return ''

    const timesInMS = getTimesInMS(stat)

    if (!timesInMS) return ''

    const rangeInMS = getRange(timesInMS)
    const averageInMS = getAverage(timesInMS)
    const medianInMS = getMedian(timesInMS)

    const formattedRange = formatTime(rangeInMS)
    const formattedAverage = formatTime(averageInMS)
    const formattedMedian = formatTime(medianInMS)

    const result = `Range: ${formattedRange} Average: ${formattedAverage} Median: ${formattedMedian}`

    return result
}

function getTimesInMS(stat) {
    return stat
        .split(', ')
        .map((stat) => stat.split('|'))
        .map((individualStat) => {
            if (isNaN(parseInt(individualStat))) return 0

            const individualTime = new Date(0)

            individualTime.setUTCHours(individualStat[0])
            individualTime.setUTCMinutes(individualStat[1])
            individualTime.setUTCSeconds(individualStat[2])

            const timeInMS = individualTime.getTime()

            if (isNaN(timeInMS))
                throw new Error(`${stat} is an invalid argument!`)

            return timeInMS
        })
}

function getRange(arr) {
    if (arr.length === 0) return 0
    return Math.max(...arr) - Math.min(...arr)
}

function getAverage(arr) {
    if (arr.length === 0) return 0
    return arr.reduce((acc, v) => acc + v) / arr.length
}

function getMedian(arr) {
    if (arr.length === 0) return 0
    const sortedNumbers = [...arr].sort((a, b) => a - b)
    const mid = Math.floor((sortedNumbers.length - 1) / 2)
    return arr.length % 2
        ? sortedNumbers[mid]
        : Math.floor((sortedNumbers[mid] + sortedNumbers[mid + 1]) / 2.0)
}

function formatTime(ms) {
    try {
        const date = new Date(ms)

        return [date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()]
            .map(minTwoDigits)
            .join('|')
    } catch (error) {
        throw new Error(`${ms} is not a valid argument!`)
    }
}

export function minTwoDigits(n) {
    if (isNaN(n)) throw new Error('Argument must be a number!')
    return (n < 10 ? '0' : '') + n
}
