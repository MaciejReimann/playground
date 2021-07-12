import { TankGauge } from './tank-gauge'

describe.skip('TankGauge with diameter 120 and volume 3500', () => {
    const tankDiameter = 120
    const tankVolume = 3500
    const tankGauge = new TankGauge({ tankDiameter, tankVolume })

    // describe('getTankLength', () => {
    //     it('returns the volume of remainig tank content for tank content height of 40', () => {
    //         expect(tankGauge.getTankLength()).toBe(1021)
    //     })
    // })

    describe('getRemainingVolume', () => {
        it('returns the volume of remainig tank content for tank content height of 40', () => {
            expect(tankGauge.getRemainingVolume(40)).toBe(1021)
        })
        it('returns the volume of remainig tank content for tank content height of 60', () => {
            expect(tankGauge.getRemainingVolume(60)).toBe(1750)
        })
        it('returns the volume of remainig tank content for tank content height of 80', () => {
            expect(tankGauge.getRemainingVolume(80)).toBe(2478)
        })
    })
})
