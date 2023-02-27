const User = {
    username : "",
    password : "",
};


// I want to get the data from the login form to verify admin
$(document).ready(function(){
    var $form = $("form");
    $("form").on("submit", function(e){

        e.preventDefault();
        User.username = $("#username").val()
        User.password = $("#password").val();
        console.log(User);
        $form.trigger("reset");
    });
});


