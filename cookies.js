function deleteCookies() {
    var domain = "http://www.aftenposten.no/";
    chrome.cookies.getAll({"url" : domain}, function(cookies) {
     console.log("Number of cookies: "+cookies.length);
     for(var i = 0; i < cookies.length; i++) {
        console.log("URL: "+ domain + " Name: " + cookies[i].name);
        chrome.cookies.remove({"url" : domain, "name" : cookies[i].name});
     }   
    });
}

function clickHandler(e) {
    deleteCookies();
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', deleteCookies);
});
