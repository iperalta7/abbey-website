$(document).ready(function() {
    $.getJSON("data/crystals.json", function(data) {
        var crystalsContainer = $("#crystals-container");

        function renderCrystals(crystals) {
            crystalsContainer.empty();
            $.each(crystals, function(index, crystal) {

                
                var crystalCard = $("<div>").addClass("col-md-3");
                var crystalContent = $("<div>").addClass("ibox-content product-box");
                var crystalImage = $("<div>").addClass("product-imitation").text("[ INFO ]");
                var crystalDesc = $("<div>").addClass("product-desc");
                var crystalPrice = $("<span>").addClass("product-price").text("$" + crystal.price);
                var crystalType = $("<small>").addClass("text-muted").text(crystal.type);
                var crystalName = $("<a>").addClass("product-name").attr("href", "#").text(crystal.name);
                var crystalDetails = $("<div>").addClass("small m-t-xs").text(crystal.description);
                var deleteBtn = $("<button>").addClass("btn btn-xs btn-outline btn-danger").text("Delete").click(function() {
                    if(confirm("Are you sure you want to delete this crystal?")) {
                        var index = crystals.indexOf(crystal);
                        if(index > -1) {
                            crystals.crystal.splice(index, 1);
                            updateCrystals(crystals);
                        }
                    }
                });

                crystalDesc.append(crystalPrice, crystalType, crystalName, crystalDetails, deleteBtn);
                crystalContent.append(crystalImage, crystalDesc);
                crystalCard.append(crystalContent);
                crystalsContainer.append(crystalCard);
            });
        }

        function updateCrystals(crystals) {
            $.ajax({
                url: "update_crystals.php",
                type: "POST",
                dataType: "json",
                data: { crystals: crystals },
                success: function(response) {
                    if(response.status == "success") {
                        renderCrystals(response.crystals);
                    }
                }
            });
        }

        function paginateCrystals(crystals, currentPage) {
            var crystalsPerPage = 6;
            var startIndex = (currentPage - 1) * crystalsPerPage;
            var endIndex = startIndex + crystalsPerPage;
            var paginatedCrystals = crystals.slice(startIndex, endIndex);
            return paginatedCrystals;
        }

        function renderPagination(crystals) {
            var totalPages = Math.ceil(crystals.length / 6);
            var paginationContainer = $("#pagination-container");
            paginationContainer.empty();

            for(var i = 1; i <= totalPages; i++) {
                var pageLink = $("<a>").addClass("page-link").attr("href", "#").text(i);
                var pageItem = $("<li>").addClass("page-item").append(pageLink);

                pageLink.click(function(event) {
                    event.preventDefault();
                    var currentPage = $(this).text();
                    var paginatedCrystals = paginateCrystals(crystals, currentPage);
                    renderCrystals(paginatedCrystals);
                });

                paginationContainer.append(pageItem);
            }
        }

        renderPagination(data);
        renderCrystals(paginateCrystals(data, 1));
    });
});