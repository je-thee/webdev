function clearDisplay() {
    document.getElementById("display").value = "";
}

function append(character) {
    const display = document.getElementById("display");
    display.value += character;
}

function toggleSign() {
    const display = document.getElementById("display");
    if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
    } else if (display.value) {
        display.value = '-' + display.value;
    }
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}