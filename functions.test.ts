const {shuffleArray} = require('./utils')

let testArr = [10,11,12,13]

describe('shuffleArray should', () => {
    test('shuffled array returns an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })

    test('should check that all the same items are in the array', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr))
    })
})