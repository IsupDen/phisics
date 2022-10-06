function solve() {
    let k = $('#k').val();
    let x = $('#x').val() * 10 ** -2;
    let l = $('#l').val() * 10 ** -2;
    let e = 8.854 * 10 ** -12;

    let answer = 4 * l * Math.sqrt(k * x * Math.PI * e) * 10 ** 9;
    document.getElementById('answer').value = answer.toFixed(3);
}