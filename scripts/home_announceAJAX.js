$(document).ready(function() {
  // Load content from a URL and insert it into a div with id 'my-div'
  $('#announcement-container').load('data/announcement.html', function(){
      $(".card-text").hide();

  });

});


// only toggle the specified announcement 
$('#announcement-container').on('click', '.card-body .btn', function(){
  $(this).siblings(".card-text").slideToggle("slow");
})