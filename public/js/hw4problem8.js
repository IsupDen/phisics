function solve() {
    let q = $('#q').val();
    let l = $('#l').val();

    let answer = - (q ** 2 / 4 / l);
    document.getElementById('answer').value = answer.toFixed(3) + ' * k';
}