module.exports = function reverse(n) {
    let num = String(n > 0 ? n : Math.abs(n));
    return num.split("").reverse().join("");
};
// reverse(-261);
