//dom refs
const nameInput = document.querySelector("#name");
const greetingOutput = document.querySelector("#greeting");

let deleteTaskId;


document.querySelector("#greet-form").addEventListener('submit',
    (event) => {
        event.preventDefault()
        greetingOutput.value = `Hello ${nameInput.value}. Welcome to WED1`;
        clearTimeout(deleteTaskId);
        deleteTaskId = setTimeout(() => {
            greetingOutput.value = '';
            nameInput.value = '';
        }, 3000);
    })
