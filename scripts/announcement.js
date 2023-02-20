var main_content = document.getElementById("main");
var newBtn = document.getElementById("add-btn");


//get current date for announcement
function getDate(){
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${monthNames[month]} ${day},${year}`;
    console.log(currentDate);
    return  currentDate;
}

//GRABS FORM DATA 
// RETURNS TITLE AND DETAILS SUBMITTED BY FORM 
// FOR NEW ANNOUNCEMENT CONTENT
function getFormData(){
    var form = document.getElementById("add-announcement");
    var title = form.elements['title'].value;
    var details = form.elements['details'].value;
    form.reset();
    console.log(title,details);

    return { title, details }
};


function change_first_announcement(){
    if(main_content.children.length > 0){
        var curr_feature_post = main_content.children[3];
        if(curr_feature_post.nextSibling.className == "row"){
            curr_feature_post.nextSibling.children[1].id = "";
        }
    }
}


/*function for add new nnouncement event listener
Most of the stuff in this function is just
for creating new elements and nodes for the new announcement
*/
function newAnnouncement(){



    var data = getFormData();
    let title = data.title,
    details = data.details;

    //default div for row containement of  announcement post
    var div_row = document.createElement("div");
    div_row.className = "row";

    //empty div (bootstrap grid)
    var empty_col_div = document.createElement("div");
    empty_col_div.className = "col-2";

    div_row.appendChild(empty_col_div);

    //div for actual post
    var post = document.createElement("div");
    post.className = "col d-flex justify-content-center text-center";
    post.id = "featured-post";

    //div for card 
    var card = document.createElement("div");
    card.className = "card mb-4";

    //div for a 
    var img_container = document.createElement("a");
    img_container.href="#!";

    //img 
    var new_img = document.createElement("img");
    new_img.className = "card-img-top";
    new_img.src = "https://dummyimage.com/850x350/dee2e6/6c757d.jpg";
    new_img.alt = "...";

    img_container.appendChild(new_img);

    card.appendChild(img_container);

    //div for card body
    var card_body = document.createElement("div");
    card_body.className = "card-body";


    var date = document.createElement("div");
    date.className = "small text-muted";
    var curr_date_text = getDate();
    var dateNode = document.createTextNode(curr_date_text);
    date.appendChild(dateNode);
    card_body.appendChild(date);
    


    var new_title = document.createElement("h2");
    new_title.className = "card-title";
    var titleNode = document.createTextNode(title);
    new_title.appendChild(titleNode);
    card_body.appendChild(new_title);


    var ptext = document.createElement("p");
    ptext.className = "card-text";
    var pNode = document.createTextNode(details);
    ptext.appendChild(pNode);
    card_body.appendChild(ptext);

    
    var new_btn = document.createElement("a");
    new_btn.className = "btn btn-primary";
    new_btn.href="#!";
    card_body.appendChild(new_btn);

    card.appendChild(card_body);
    post.appendChild(card);
    div_row.appendChild(post);

    var curr_feature_post = main_content.children[3];
    console.log(curr_feature_post);

     //empty div (bootstrap grid)
     var empty_col_div2 = document.createElement("div");
     empty_col_div2.className = "col-2";
     div_row.appendChild(empty_col_div2);

    main_content.insertBefore(div_row, curr_feature_post)


    //change recent announcement to featured
    change_first_announcement();
};

//event listener to form "submit" button
newBtn.addEventListener('click', newAnnouncement);


