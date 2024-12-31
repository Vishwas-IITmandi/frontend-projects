document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector('input[name="display"]'); // Select the display input

    // Add event listeners to all buttons
    const buttons = document.querySelectorAll('input[type="button"]');
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value;

            if (value === "AC") {
                display.value = ""; // Clear display
            } else if (value === "DE") {
                display.value = display.value.slice(0, -1); // Delete last character
            } else if (value === "=") {
                try {
                    display.value = eval(display.value); // Evaluate expression
                } catch (e) {
                    display.value = "Error"; // Handle invalid expressions
                }
            } else {
                display.value += value; // Add value to display
            }
        });
    });
});
