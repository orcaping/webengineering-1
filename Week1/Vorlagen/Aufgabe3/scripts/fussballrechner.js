const meter1 = document.querySelector("#meter1");
const meter2 = document.querySelector("#meter2");
const result = document.querySelector("#result");

document.querySelector("#soccer-form").addEventListener('submit',
    (event) => {
        event.preventDefault()
        result.value = meter1.value * meter2.value;
    })