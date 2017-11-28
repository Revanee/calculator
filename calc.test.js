const calc = require('./calc')

test('Literal 0', () => {
    expect(calc('0')).toBe(0)
})

test('Literal 5', () => {
    expect(calc('5')).toBe(5)
})

test('Literal -5', () => {
    expect(calc('-5')).toBe(-5)
})

test('Addition 1+1', () => {
    expect(calc('1+1')).toBe(2)
})

test('Subtraction 2-1', () => {
    expect(calc('2-1')).toBe(1)
})

test('Addition and subtraction 2+5-1-2+4', () => {
    expect(calc('2+5-1-2+4')).toBe(8)
})