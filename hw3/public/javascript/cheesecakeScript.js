$(document).ready(function () {

    $("#thisOrderInfo").hide();

    $("#orderButton").click(function () {

        var notes = $("#notes").val();

        if (notes.toLowerCase().includes("vegan")) {
            alert("This cheesecake contains dairy!");
        }

        else {

            $("#orderSpecTable").hide();
            $("#notesHeaderText").hide();
            $("#notes").hide();
            $("#orderButton").hide();

            $("#buttonWrapper").append("<p id=\"orderConfirmation\">Thank you! Your order has been placed.</p>");

            var topping = $("input[name=topping]:checked").val();
            $("#toppingInfo").text("Topping: " + topping);

            var quantity = $("#quantitySelector").children("option:selected").text();
            $("#quantityInfo").text("Quantity: " + quantity);

            $("#notesInfo").text("Notes: " + notes);

            $("#thisOrderInfo").show();

        }
    });

    // toggle the dropdown (show or hide) upon button click
    $("#monthDataSelector").click(function () {
        $("#monthDropdown").toggle();
    });

    // Close the dropdown if the user clicks outside of it
    $(window).click(function (event) {
        if (!event.target.matches("#monthDataSelector")) {
            $("#monthDropdown").hide();
        }
    });
});