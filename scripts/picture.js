// select element from DOM using *const*
const left = document.getElementById("l-image"); // grabs left image button
const right = document.getElementById("r-image"); // grabs right iamge button
const bg = document.getElementById("bground-image"); //get backgroudn image div

// For now three images will be used to change the main image 
const images = {
    track : 0,
    list_of_images : ["https://cdn.shopify.com/s/files/1/2152/9153/files/AdobeStock_297424441_1.jpg?v=1648487198","https://cdn.luxatic.com/wp-content/uploads/2022/08/Gemstone-value.jpg","https://images.squarespace-cdn.com/content/v1/528e7c71e4b0fe20836f0a7e/1598901546937-C5YD4KJLG4GBKGYZOYSU/Gems+and+Crystals.jpg"],
    curr_image: "https://cdn.shopify.com/s/files/1/2152/9153/files/AdobeStock_297424441_1.jpg?v=1648487198",
};



//change images to right 
function changeRight(){

    //reset track to repeat list otherwise go ti next 
    if(images.track === images.list_of_images.length-1){
        images.track = 0;
    }else{
        images.track+=1;
    }

    images.curr_image = images.list_of_images[images.track];

    for(var i = 0; i < 1000; i++){

    } //used to slow down 

    // change css style
    bg.style.backgroundImage = "url(" + images.curr_image + ")"; // Changes color, adds style property.
    
    console.log(images.curr_image);
}


//change images to left 
function changeLeft(){

    
    //reset track to repeat list otherwise go to next 
    if(images.track === 0){
        images.track = 2;
    }else{
        images.track-=1;
    }

    images.curr_image = images.list_of_images[images.track];
    for(var i = 0; i < 1000; i++){
        
    } //used to slow down 
    // change css style
    bg.style.backgroundImage = "url(" + images.curr_image + ")"; // Changes color, adds style property.

    console.log(images.curr_image);
}


//this changes the images every 10 seconds
 window.onload = function () {
     setInterval(changeRight, 10000);
 };