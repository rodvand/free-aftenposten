chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log("Message sent to extension.");
});
