import { isChessBoardCellColorEqual } from "./isChessBoardCellColorEqual"

describe("isChessBoardCellColorEqual", () => {
    it("returns true if both cells have the same color and false otherwise", () => {
        expect(isChessBoardCellColorEqual("A1","C3")).toBe(true)
        expect(isChessBoardCellColorEqual("A1","H3")).toBe(false)
        expect(isChessBoardCellColorEqual("A1","A2")).toBe(false)
    })
})
