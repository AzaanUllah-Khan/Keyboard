
function copyInputField() {
    var inputField = document.getElementById("d");
    inputField.select();
    document.execCommand("copy");
    alert("Text copied: " + inputField.value);
    inputField.value = ""
}
const keys = document.querySelectorAll('.key');
const shiftButton = document.querySelector('#shift');
let shifted = false;

function toggleShift() {
    shifted = !shifted;
    updateKeys();
}

function updateKeys() {
    keys.forEach(key => {
        const value = key.value;
        if (shifted) {
            key.textContent = shiftKey(value);
            key.value = shiftKey(value);
        } else {
            key.textContent = small(value);
            key.value = small(value);
        }
    });
}

function shiftKey(key) {
    switch (key) {
        case '`': return '~';
        case '1': return '!';
        case '2': return '@';
        case '3': return '#';
        case '4': return '$';
        case '5': return '%';
        case '6': return '^';
        case '7': return '&';
        case '8': return '*';
        case '9': return '(';
        case '0': return ')';
        case '-': return '_';
        case '=': return '+';
        case 'q': return 'Q';
        case 'w': return 'W';
        case 'e': return 'E';
        case 'r': return 'R';
        case 't': return 'T';
        case 'y': return 'Y';
        case 'u': return 'U';
        case 'i': return 'I';
        case 'o': return 'O';
        case 'p': return 'P';
        case '[': return '{';
        case ']': return '}';
        case 'a': return 'A';
        case 's': return 'S';
        case 'd': return 'D';
        case 'f': return 'F';
        case 'g': return 'G';
        case 'h': return 'H';
        case 'j': return 'J';
        case 'k': return 'K';
        case 'l': return 'L';
        case ';': return ':';
        case "'": return '"';
        case 'z': return 'Z';
        case 'x': return 'X';
        case 'c': return 'C';
        case 'v': return 'V';
        case 'b': return 'B';
        case 'n': return 'N';
        case 'm': return 'M';
        case ',': return '<';
        case '.': return '>';
        case '/': return '?';
        default: return key;
    }
}

function small(key) {
    switch (key) {
        case '~': return '`';
        case '!': return '1';
        case '@': return '2';
        case '#': return '3';
        case '$': return '4';
        case '%': return '5';
        case '^': return '6';
        case '&': return '7';
        case '*': return '8';
        case '(': return '9';
        case ')': return '0';
        case '_': return '-';
        case '+': return '=';
        case 'Q': return 'q';
        case 'W': return 'w';
        case 'E': return 'e';
        case 'R': return 'r';
        case 'T': return 't';
        case 'Y': return 'y';
        case 'U': return 'u';
        case 'I': return 'i';
        case 'O': return 'o';
        case 'P': return 'p';
        case '{': return '[';
        case '}': return ']';
        case 'A': return 'a';
        case 'S': return 's';
        case 'D': return 'd';
        case 'F': return 'f';
        case 'G': return 'g';
        case 'H': return 'h';
        case 'J': return 'j';
        case 'K': return 'k';
        case 'L': return 'l';
        case ':': return ';';
        case '"': return "'";
        case 'Z': return 'z';
        case 'X': return 'x';
        case 'C': return 'c';
        case 'V': return 'v';
        case 'B': return 'b';
        case 'N': return 'n';
        case 'M': return 'm';
        case '<': return ',';
        case '>': return '.';
        case '?': return '/';
        default: return key;
    }
}
shiftButton.addEventListener('click', toggleShift);
