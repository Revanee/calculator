function calc (data) {
    data = data.split('+')

    data = data.reduce((num, acc) => {
        acc += Number(num)
    }, 0)

    return data
}

module.exports = calc