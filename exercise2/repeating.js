function repeatingText(text) {
    // Create an empty string to hold the repeated text
    let output = '';

    // Loop 50 times to add the text
    for (let i = 0; i < 50; i++) {
        output += text + "<br>"; // Add the text and a line break
    }

    // Write the result to the page
    document.body.innerHTML = output;
}