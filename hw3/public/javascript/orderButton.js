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

    
});