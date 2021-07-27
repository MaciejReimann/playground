import { areParenthesesClosed } from "./are-parentheses-closed"

const testCases = [
    ['()', true],
    [')(', false],
    [')()', false],
    ['()(', false],
    ['())', false],
    ['((())())', true],
    ['((())()', false],
    ['())(()', false],
    ['(())))', false]
]

describe("areParenthesesClosed", () => {
    it("returns true if all parentheses are closed", () => {
        testCases.forEach(testCase => {
            expect(areParenthesesClosed(testCase[0])).toBe(testCase[1])
        })
    })
})

