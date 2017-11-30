function calc (data) {
    data = data.replace(/\s/g, '')
    
    data = data.split('')

    let numbers = []

    let fSign = false
    let fNumStarted = false
    let fParenthesis = 0

    data.forEach(element => {
        if (!fParenthesis) {
            if (element.match(/[0-9]/)) {
                if (fNumStarted) {
                    numbers[numbers.length - 1] = numbers[numbers.length - 1] + element
                }
                else {
                    if (fSign) numbers.push(fSign + element)
                    else numbers.push(element)
                    fNumStarted = true
                }
            }
            if (element.match(/\+/)) {
                fSign = '+'
                fNumStarted = false
            }
            if (element.match(/-/)) {
                fSign = '-'
                fNumStarted = false
            }
            if (element.match(/\(/)) {
                fParenthesis++
                numbers.push([])
            } 
        } else {
            if (element.match(/\)/)) {
                fParenthesis--
                if (!fParenthesis) numbers[numbers.length - 1] = fSign ? Number(fSign + '1') * calc(numbers[numbers.length - 1]) : calc(numbers[numbers.length - 1])
                else numbers[numbers.length - 1] = numbers[numbers.length - 1] + element
                fSign = false
            } else if (element.match(/\(/)) {
                numbers[numbers.length - 1] = numbers[numbers.length - 1] + element
                fParenthesis++
            } else {
                numbers[numbers.length - 1] = numbers[numbers.length - 1] + element
            }
        }

    });

    return numbers.reduce((acc, x) => acc + Number(x), 0)
}

module.exports = calc