// Source: https://www.codewars.com/kata/55f3da49e83ca1ddae0000ad

export class TankGauge {
    constructor({ tankDiameter, tankVolume }) {
        this.tankDiameter = tankDiameter
        this.tankVolume = tankVolume
        this.tankRadius = tankDiameter / 2
        this.sectionArea = Math.PI * this.tankRadius ** 2
        this.tankLength = tankVolume / this.sectionArea
    }

    // getTankLength() {
    //     return this.tankLength
    // }

    getRemainingVolume(liquidHeight) {
        // from proportion: liquidHeight / this.sectionArea = remainingVolume  / this.tankVolume
        const remainingVolume =
            (liquidHeight * this.tankVolume) / this.sectionArea
        return remainingVolume
    }
}

// https://mathworld.wolfram.com/CircularSegment.html
// https://www.varsitytutors.com/hotmath/hotmath_help/topics/equation-of-a-circle#:~:text=The%20equation%20of%20a%20circle,k)2%3Dr2%20.
