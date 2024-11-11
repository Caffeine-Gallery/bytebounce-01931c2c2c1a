import { backend } from "declarations/backend";

const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");
const buttonText = document.getElementById("buttonText");
const loadingSpinner = document.getElementById("loadingSpinner");

greetButton.addEventListener("click", async () => {
    const name = nameInput.value.trim();
    if (!name) {
        greeting.textContent = "Please enter a name";
        return;
    }

    // Show loading state
    buttonText.classList.add("d-none");
    loadingSpinner.classList.remove("d-none");
    greetButton.disabled = true;

    try {
        const response = await backend.greet(name);
        greeting.textContent = response;
    } catch (error) {
        greeting.textContent = "Error: " + error.message;
    } finally {
        // Hide loading state
        buttonText.classList.remove("d-none");
        loadingSpinner.classList.add("d-none");
        greetButton.disabled = false;
    }
});
