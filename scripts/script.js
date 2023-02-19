const User = {
    username : "",
    password : "",
    

    getUser(){
        
    },
};


// I want to get the data from the login form to verify admin
var login_form = document.getElementsByClassName("login100-form validate-form flex-sb flex-w");
console.log(login_form);
login_form.onsubmit = function(){
    var formData = new FormData(login_form);
    User.username = formData.username;
    User.password = formData.password;
};

console.log(User);
