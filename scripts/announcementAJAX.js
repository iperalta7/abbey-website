function change_first_announcement(){
    $(".row").children("#featured-post").attr({"id":""});
}

//function for adding announcemtn to dom tree div layout
function announcemtFromXML(i, announcements) {

    var title = announcements[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    var date = announcements[i].getElementsByTagName("date")[0].childNodes[0].nodeValue;
    var content = announcements[i].getElementsByTagName("content")[0].childNodes[0].nodeValue;
    //default div for row containement of  announcement post
    var $div_row = $("<div></div>").addClass("row");

    //empty div (bootstrap grid)
    var $empty_col_div = $("<div></div>").addClass("col-2");
    $div_row.append($empty_col_div);

    var $post = $("<div></div>").addClass("col d-flex justify-content-center text-center").attr("id", "featured-post");     //div for actual post

    var $card = $("<div></div>").addClass("card mb-4");     //div for card 

    var $img_container = $("<a></a>").attr("href", "#!");     //div for a 

    var $new_img = $("<img></img>").addClass("card-img-top").attr({     //img 
        "src": "https://dummyimage.com/850x350/dee2e6/6c757d.jpg",
        "alt": "..."
    });

    $img_container.append($new_img);
    $card.append($img_container);

    //div for card body
    var $card_body = $("<div></div>").addClass("card-body");

    // set date
    var $date = $("<div></div>").addClass("small text-muted").append(document.createTextNode(date));
    $card_body.append($date);

    //Set the title of new announcement
    var $new_title = $("<h2></h2>").addClass("card-title").append(document.createTextNode(title));
    $card_body.append($new_title);

    //set details of new announcements
    var $ptext = $("<p></p>").addClass("card-text").text(content);
    $card_body.append($ptext);

    var $new_btn = $("<a></a>").addClass("btn btn-primary read-more-btn").attr("href", "#!").text("Read more →");
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
    $(".card-text").slideUp();
}

// function to request xml file
function XMLload(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var announcements = xmlDoc.getElementsByTagName("announcement");

            for (var i = 0; i < announcements.length; i++) {

                announcemtFromXML(i, announcements);
            }
        }
    };
    xhr.open("GET", "data/announcements.xml", true);
    xhr.send();

}

XMLload();
