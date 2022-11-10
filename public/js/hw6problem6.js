function solve() {
    let R = $('#R').val();
    let t = $('#t').val();
    let I0 = $('#I0').val();
    let Imax = $('#Imax').val();

    let answer = ((Imax - I0) ** 2 / 3 + I0 * Imax) * R * t / 10 ** 3;
    document.getElementById('answer').value = answer.toFixed(3);
}