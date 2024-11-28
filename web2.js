function Solve(val) {
    var display = document.getElementById('res');
    display.value += val; // Append the value to the display
}

function Result() {
    var display = document.getElementById('res').value;
    try {
        // Replace 'x' with '*' for multiplication and evaluate
        var result = eval(display.replace(/x/g, '*'));
        document.getElementById('res').value = result; // Show the result
    } catch {
        document.getElementById('res').value = 'Error'; // Handle errors
    }
}

function Clear() {
    document.getElementById('res').value = ''; // Clear the display
}

function Back() {
    var display = document.getElementById('res');
    display.value = display.value.slice(0, -1); // Remove the last character
}

// Keyboard Event Listener for Input
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const display = document.getElementById('res');
    const validKeys = '0123456789+-*/.%';

    if (validKeys.includes(key)) {
        Solve(key === '*' ? 'x' : key); // Map '*' to 'x' for the display
    } else if (key === 'Enter') {
        Result(); // Pressing 'Enter' evaluates the result
    } else if (key === 'Backspace') {
        Back(); // Backspace removes the last character
    } else if (key === 'Escape') {
        Clear(); // Escape clears the display
    }
});
