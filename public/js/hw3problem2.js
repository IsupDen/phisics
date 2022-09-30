function solve() {
    let x = $('#x').val();
    let y = $('#y').val();
    let a = $('#a').val();

    let answerA = - 2 * a + `(${x}i - ${y}j)`;
    let answerB = - a + `(${x}i + ${y}j)`;
    document.getElementById('answer-a').value = answerA;
    document.getElementById('answer-b').value = answerB;
}