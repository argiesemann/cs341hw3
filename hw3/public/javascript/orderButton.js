//Andres Giesemann
//CS341 HW3

//ensure the script is only run when the page has been sufficiently loaded
$(document).ready(function () {

    //The order information remains hidden from the start until the order button is clicked
    $("#thisOrderInfo").hide();

    //the order button's click function
    $("#orderButton").click(function () {

        var notes = $("#notes").val();

        //if the user typed the word "vegan" into the textarea, then give a warning
        if (notes.toLowerCase().includes("vegan")) {
            alert("This cheesecake contains dairy!");
        }

        //otherwise, hide all the html elements relevant to ordering a cheesecake and display the stats of
        //the order that was just placed
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