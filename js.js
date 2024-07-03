
//EX1
function addClass() {
    let classInput = document.getElementById('classInput');
    let className = classInput.value;

        let classParagraphs = document.getElementById('text');
         classParagraphs.classList.add(className);
}

//EX2
function changeTextAndDisable() {
    const button = document.getElementById('myButton');
    button.textContent = 'לחץ!';
    button.style.pointerEvents = 'none';
}

//EX3
function toggleVisibility(elementId) {
    let element = document.getElementById(elementId);
    element.classList.toggle("hidden");
}