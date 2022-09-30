function solve() {
    let R = $('#R').val();
    let q = $('#q').val();
    let lambda = $('#lambda').val();

    let answer = q * lambda / R;
    document.getElementById('answer').value = answer.toFixed(3) + ' * k';
}