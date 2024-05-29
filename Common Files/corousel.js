document.addEventListener("DOMContentLoaded", function() {
    let counter = 1;
    setInterval(function() {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4 ) {
            counter = 1;
        }
    }, 5000); // Change slides every 5 seconds
});