let textValue = '';

function addNumber(number) {
    textValue += number;
    updateText();
}
function addOperator(operator) {
    textValue += ` ${operator} `;
    updateText();
}

function addDecimal() {
    textValue += '.';
    updateText();
}

function clearText() {
    textValue = '';
    updateText();
}
function deleteLast() {
    textValue = textValue.slice(0, -1); 
    updateText();
}

 function updateText() {
    document.getElementById('display').value = textValue;
}

function calculate() {
        textValue = eval(textValue.replace('x', '*'));
        updateText();
}

 



























