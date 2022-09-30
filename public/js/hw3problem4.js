function solve() {
    let x = $('#x').val();
    let y = $('#y').val();
    let a = $('#a').val();

    let answerA = - a * x * y;
    let answerB = - a * x ** 2 * y + a * y ** 3 / 3;
    document.getElementById('answer-a').value = answerA.toFixed(3);
    document.getElementById('answer-b').value = answerB.toFixed(3);
}