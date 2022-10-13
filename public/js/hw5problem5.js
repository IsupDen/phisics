function solve() {
    let l = $('#l').val() * 10 ** -3;
    let r1 = $('#r1').val() * 10 ** -6;
    let r2 = $('#r2').val() * 10 ** -3;
    let e0 = 8.854;

    let answer = l * 2 * Math.PI / Math.log(r2/r1) * e0;
    document.getElementById('answer').value = answer.toFixed(3);
}