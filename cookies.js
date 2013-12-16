function deleteCookies() {
    var domain = "http://www.aftenposten.no/";
    chrome.cookies.getAll({"url" : domain}, function(cookies) {
    console.log("Number of cookies: "+cookies.length);
    for(var i = 0; i < cookies.length; i++) {
         var regexp = /^VPW*/;
         if(regexp.test(cookies[i].name)) {
            console.log("URL: "+ domain + " Name: " + cookies[i].name);
            chrome.cookies.remove({"url" : domain, "name" : cookies[i].name});
         }
     }   
    });
}

// Get a message from the content script
// and delete the cookies
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    deleteCookies();
  });
