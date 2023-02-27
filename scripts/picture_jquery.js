// select element from DOM using *const*
const $left = $('#l-image');
const $right = $('#r-image');
const $bg = $('#bground-image');
// For now three images will be used to change the main image  (object)
const images = {
    track: 0,
    list_of_images: [
        "https://cdn.shopify.com/s/files/1/2152/9153/files/AdobeStock_297424441_1.jpg?v=1648487198",
        "https://cdn.luxatic.com/wp-content/uploads/2022/08/Gemstone-value.jpg",
        "https://images.squarespace-cdn.com/content/v1/528e7c71e4b0fe20836f0a7e/1598901546937-C5YD4KJLG4GBKGYZOYSU/Gems+and+Crystals.jpg"
    ],
    curr_image: "https://cdn.shopify.com/s/files/1/2152/9153/files/AdobeStock_297424441_1.jpg?v=1648487198",
};

//change images to right 
function changeRight() {
        //reset track to repeat list otherwise go ti next 
    if (images.track === images.list_of_images.length - 1) {
        images.track = 0;
    } else {
        images.track += 1;
    }
    images.curr_image = images.list_of_images[images.track];
    // change css style
    $bg.css({'background-image': 'url(' + images.curr_image + ')',
    "transition":" background-image 3s"
});
}

function changeLeft() {
    if (images.track === 0) {
        images.track = 2;
    } else {
        images.track -= 1;
    }
    images.curr_image = images.list_of_images[images.track];
      // change css style
      $bg.css({'background-image': 'url(' + images.curr_image + ')',
    "transition":" background-image 3s"
});
}

window.onload = function() {
    setInterval(changeRight, 7000);
};

$left.on('click', changeLeft);
$right.on('click', changeRight);