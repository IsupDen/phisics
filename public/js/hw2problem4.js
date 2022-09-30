function solve() {
    let lambda = $('#lambda').val();
    let R = $('#R').val();

    let answer = Math.sqrt(2) * lambda / R;
    document.getElementById('answer').value = answer.toFixed(3) + ' * k';
}