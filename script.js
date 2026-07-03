const textArea = document.getElementById("textArea");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxCharacters = 200;

textArea.addEventListener("input", function () {

    let count = textArea.value.length;

    if (count > maxCharacters) {
        textArea.value = textArea.value.substring(0, maxCharacters);
        count = maxCharacters;
    }

    counter.textContent = `${count}/${maxCharacters} characters`;

    if (count === maxCharacters) {
        warning.textContent = "Character limit reached!";
    } else {
        warning.textContent = "";
    }

});