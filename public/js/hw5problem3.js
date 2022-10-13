function solve() {
    let e = $('#e').val();
    let a = $('#a').val();
    let e0 = $('#e0').val();

    let answer = e0 * ((Math.cos(a) / e) ** 2 + Math.sin(a) ** 2) ** 0.5;
    document.getElementById('answer').value = answer.toFixed(3);
}