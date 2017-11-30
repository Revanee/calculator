const calc = require('./calc')

test('Single zero', () => {
    expect(calc('0')).toBe(0)
})

test('Single positive', () => {
    expect(calc('+5')).toBe(+5)
})

test('Single negative', () => {
    expect(calc('-5')).toBe(-5)
})

test('Double digit', () => {
    expect(calc('58')).toBe(58)
})

test('Addition', () => {
    expect(calc('1+1')).toBe(2)
})

test('Subtraction', () => {
    expect(calc('2-1')).toBe(1)
})

test('Addition and subtraction', () => {
    expect(calc('2+5-1-2+4')).toBe(8)
})

test('With spaces', () => {
    expect(calc('2 - 3')).toBe(-1)
})

test('Single parenthesis', () => {
    expect(calc('(1+2)')).toBe(3)
})

test('Multiple parenthesis', () => {
    expect(calc('(1+2)+3-(-4+1)')).toBe(9)
})
