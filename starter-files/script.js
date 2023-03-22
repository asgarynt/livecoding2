// API
const API_ENDPOINT = 'https://yesno.wtf/api';
let answer = document.querySelector("#answer");
let btn = document.querySelector("#button");
let input = document.querySelector("#input");


/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */




async function fetchAnswer() {
    let response = await fetch(`${API_ENDPOINT}`);
    let data = await response.json();
    console.log(data);

    answer.textContent = `${data.answer}`;
    input.value = "";
}

btn.addEventListener("click", fetchAnswer);

