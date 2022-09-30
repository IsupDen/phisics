function solve() {
    let lambda = $('#lambda').val() * 10 ** -6;
    let l = $('#l').val() * 10 ** -2;
    let a = $('#a').val() * 10 ** -2;
    let k = 9 * 10 ** 9;

    let answer = k * lambda * l / (a * (a + l) * 1000);
    document.getElementById('answer').value = answer.toFixed(3);
}