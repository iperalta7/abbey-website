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
    return 
}

getDate();

//GRABS FORM DATA 
// RETURNS TITLE AND DETAILS SUBMITTED BY FORM 
// FOR NEW ANNOUNCEMENT CONTENT
function getFormData(){
    const form = document.getElementById("add-announcement");
    const title = form.elements['title'].value;
    const details = form.elements['details'].value;

    console.log(title,details);

    form.reset();

    return title, details;
};

function newAnnouncement(){
    
    title,details = getFormData();

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

    //div for card 
    var card = document.createElement("div");
    card.className = "card mb-4";

    //div for a 
    var img_container = document.createElement("a");
    img_container.href="#!";

    //img 
    var new_img = document.createElement("img");
    new_img.src = "https://dummyimage.com/850x350/dee2e6/6c757d.jpg";
    new_img.alt = "...";

    //div for card body
    var card_body = document.createElement("div");
    card_body.className = "card-body";

    var date = document.createElement("div");
    date.className = "small text-muted";

    var new_title = document.createElement("h2");
    new_title.className = "card-title";

    var ptext = document.createElement("p");
    ptext.className = "card-text";
    var new_btn = document.createElement("a");
    new_btn.className = "btn btn-primary";
    new_btn.href="#!";




};
/*
        <!-- Featured blog post-->
        <div class="row"> 
            <div class="col-2"></div>
            <div id="featured-post" class="col d-flex justify-content-center text-center">
                <div class="card mb-4">
                    <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
                            alt="..."></a>
                    <div class="card-body">
                        <div class="small text-muted">January 1, 2022</div>
                        <h2 class="card-title">Dorm Store This Week!</h2>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid
                            atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero
                            voluptate voluptatibus possimus, veniam magni quis!</p>
                        <a class="btn btn-primary" href="#!">Read more →</a>
                    </div>
                </div>
            </div>
            <div class="col-2"></div>
        </div>
        */

//event listener to form "submit" button
newBtn.addEventListener('click', newAnnouncement);
