const textArea = document.getElementById('area');
const resultArea = document.getElementById('result');
const errorArea = document.getElementById('error');
const testRunner = document.getElementById('mochaRunner');

testRunner.onclick = (e) => {
    mocha.run();
    e.currentTarget.style.visibility = "hidden";
}

textArea.onchange = (e) => {
    try {
        let result = algorithm(textArea.value);
        resultArea.innerHTML = result.join(' ');
        if (!result.length) resultArea.innerHTML = '...'; //если пустой массив, то ...
        errorArea.innerHTML = '';
    } catch (err) {
        errorArea.innerHTML = err.message;
    }
}