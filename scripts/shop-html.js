// Create a function that triggers your Ajax request to load the data from a given HTML file. Your function should do at least the following:
// Receive a file path of an HTML file to load as an argument. 
// Create an XMLHttpRequest object.
// When the response has loaded, check if the server status was okay. If so, update the div with the id called “details” to contain the new HTML that is retrieved from the XMLHttpRequest object's responseText property.
// Prepare the request. Make sure to use HTTP GET to send the request, the path to your HTML file, and true to specify that the request is asynchronous.
// Send the request.
function getData(filepath) {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if (xhr.status === 200) {
            const shopData = xhr.responseText;
            document.getElementsByClassName("row")[0].innerHTML = shopData;
        }
    };

    xhr.open("GET", `data/${filepath}`, true);
    xhr.send(null);
}



//call the function for shop.html
getData("shop.html");
