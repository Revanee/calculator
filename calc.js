function calc (data) {
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