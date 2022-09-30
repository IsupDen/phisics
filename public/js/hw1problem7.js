function solve() {
    let R = $('#R').val() * 10 ** -2;
    let Q = $('#Q').val() * 10 ** -9;
    let h = $('#h').val() * 10 ** -2;
    let k = 9 * 10 ** 9;

    let answer = k * h * Q / ((R ** 2 + h ** 2) ** (3/2) * 1000);
    document.getElementById('answer').value = answer.toFixed(3);
}