//get main_content and newBtn using jQuery
var $main_content = $("#main");


//get current date for announcement
function getDate(){
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${monthNames[month]} ${day},${year}`;
    return  currentDate;
}

//GRABS FORM DATA 
// RETURNS TITLE AND DETAILS SUBMITTED BY FORM 
// FOR NEW ANNOUNCEMENT CONTENT
function getFormData(){
    var $title = $("#title").val();
    var $details = $("#details").val();
    return {$title, $details }
};

function change_first_announcement(){
        $(".row").children("#featured-post").attr({"id":""});
    }

/*function for add new nnouncement event listener
Most of the stuff in this function is just
for creating new elements and nodes for the new announcement
*/
function newAnnouncement(){
    var data = getFormData();
    let title = data.$title,
    details = data.$details;

    //default div for row containement of  announcement post
    var $div_row = $("<div></div>").addClass("row");

    //empty div (bootstrap grid)
    var $empty_col_div = $("<div></div>").addClass("col-2");

    $div_row.append($empty_col_div);

    //div for actual post
    var $post = $("<div></div>").addClass("col d-flex justify-content-center text-center").attr("id", "featured-post");

    //div for card 
    var $card = $("<div></div>").addClass("card mb-4");

    //div for a 
    var $img_container = $("<a></a>").attr("href", "#!");

    //img 
    var $new_img = $("<img></img>").addClass("card-img-top").attr({
        "src": "https://dummyimage.com/850x350/dee2e6/6c757d.jpg",
        "alt": "..."
    });

    $img_container.append($new_img);
    $card.append($img_container);

    //div for card body
    var $card_body = $("<div></div>").addClass("card-body");

    // set date
    var $date = $("<div></div>").addClass("small text-muted").append(document.createTextNode(getDate()));
    $card_body.append($date);

    //Set the title of new announcement
    var $new_title = $("<h2></h2>").addClass("card-title").append(document.createTextNode(title));
    $card_body.append($new_title);

    //set details of new announcements
    var $ptext = $("<p></p>").addClass("card-text").text(details);
    $card_body.append($ptext);

    var $new_btn = $("<a></a>").addClass("btn btn-primary").attr("href", "#!");
    $card_body.append($new_btn);
    

    $card.append($card_body);
    $post.append($card);
    $div_row.append($post);

    //empty div (bootstrap grid)
    var empty_col_div2 = $("<div></div>").addClass("col-2");
    $div_row.append(empty_col_div2);   


      //change recent announcement to featured
      change_first_announcement();

    //insert new div row before the first .row found
    $(".row").first().before($div_row);

}      

//event listener to form "submit" button
$("#add-btn").on("click",newAnnouncement);
