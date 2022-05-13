export const amountFormatter = (amount) => {
    return amount.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const concatString = (str) => {
    return str.replace(/\s+/g, '-').toLowerCase();
}

export const round = (num) => {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}