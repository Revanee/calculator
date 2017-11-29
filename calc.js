function calc (data) {
    data = data.replace(/\s/g, '')

    if(data.split(/\(|\)/g).length !== 1) {
        data = data.split('')
        values = [[]]
        data.forEach(element => {
            if(element !== "(" && element !== ")") values[values.length - 1].push(element)
            else if (element === "(") values.push([])
            else if (element === ")") values.push([])
        });
        return values
        return values = values.map(x => calc(x.join('')))
        // return values.reduce((sum, val) => sum + val)
    }
    
    data = data.split('')

    data = data.reduce((arr, sym) => {
        if (Number(sym)) arr[arr.length - 1].push(sym)
        else (arr.push([sym]))
        return arr
    }, [[]])

    data = data.map(x => x.join(''))

    data = data.reduce((acc, num) => acc + Number(num), 0)

    return data
}

module.exports = calc