function totallyAwesome() {
    console.log("Logging.");
    alert("TESTE!");
}

function awesomeTask() {
  totallyAwesome();
}

function clickHandler(e) {
    awesomeTask();
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
});
