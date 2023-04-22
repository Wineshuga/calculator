const display = document.getElementById('screen-text')

function one() {
    display.value += 1
}
function two() {
    display.value += 2
}
function three() {
    display.value += 3
}
function four() {
    display.value += 4
}
function five() {
    display.value += 5
}
function six() {
    display.value += 6
}
function seven() {
    display.value += 7
}
function eight() {
    display.value += 8
}
function nine() {
    display.value += 9
}
function zero() {
    display.value += 0
}
function plus() {
    display.value += '+'
}
function point() {
    display.value += '.'
}
function multiply() {
    display.value += '*'
}
function divide() {
    display.value += '/'
}
function minus() {
    display.value += '-'
}

function equals() {
    display.value = eval(display.value)
}

function reset() {
    display.value = ''
}