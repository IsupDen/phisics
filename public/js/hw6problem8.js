function solve() {
    let R = $('#R').val();
    let q = $('#q').val();
    let t = $('#t').val();

    let answer = 4 * q * q * R / (3 * t);
    document.getElementById('answer').value = answer.toFixed(3);
}