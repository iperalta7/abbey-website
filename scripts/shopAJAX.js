$(document).ready(function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var data = JSON.parse(this.responseText);
        var crystalsContainer = $("#crystals-container");
        var crystalsPerPage = 6;
        var totalPages = Math.ceil(data.crystal.length / crystalsPerPage);
        var paginationContainer = $("#pagination-container");
  
        // Create and append pagination links
        for (var i = 1; i <= totalPages; i++) {
          var paginationLink = $("<a>").addClass("page-link").attr("href", "#").text(i);
          var paginationItem = $("<li>").addClass("page-item").append(paginationLink);
          paginationContainer.append(paginationItem);
        }
  
        showPage(1); // Show first page by default
  
        // Add click event listener to pagination links
        $(".page-link").on("click", function() {
          var pageNum = parseInt($(this).text());
          showPage(pageNum);
        });
  
        function showPage(pageNum) {
          var start = (pageNum - 1) * crystalsPerPage;
          var end = start + crystalsPerPage;
          var crystalsToShow = data.crystal.slice(start, end);
  
          // Clear crystals container and append new crystals
          crystalsContainer.empty();
          $.each(crystalsToShow,function(){
            var crystalCard = $("<div>").addClass("col-sm-4 col-xs-12");
            var crystalImage = $("<img>").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtVQUtUx4NRr7NLdwj1Qfj8OdThZxpiQChA&usqp=CAU").addClass("img-responsive");
            var crystalTitle = $("<h2>").text(this.name);
            var crystalPrice = $("<p>").text("Price: $" + this.price);
            var crystalDesc = $("<p>").text(this.description);
            var deleteButton = $("<button>").addClass("btn btn-danger btn-sm").text("Delete");
            deleteButton.on("click", function() {
              var confirmDelete = confirm("Are you sure you want to delete this crystal?");
              if (confirmDelete) {
                var crystalIndex = data.crystal.findIndex(c => c.name === crystalTitle.text());
                data.crystal.splice(crystalIndex, 1);
                localStorage.setItem("crystalsData", JSON.stringify(data));
                showPage(pageNum); // Refresh page to show updated data
              }
            });
            crystalCard.append(crystalImage, crystalTitle, crystalPrice, crystalDesc, deleteButton);
            crystalsContainer.append(crystalCard);
          });
  
          // Set active class on current pagination link
          $(".page-item").removeClass("active");
          $(".page-item").eq(pageNum - 1).addClass("active");
        }
      }
    };
    request.open("GET", "data/crystals.json", true);
    request.send();
  });
  
  // Default to hide these containers holding the crystals
  $("#crystals-container").hide();
  $("#pagination-container").hide();
  
  // Delegation used for AJAX added content
  $(".container").on("click","#show-crystals", function () {
    $("#crystals-container").toggle("slow");
    $("#pagination-container").toggle("slow");
  });
  
