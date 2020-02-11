//Andres Giesemann
//CS341 HW3

//ensure the script is only run when the page has been sufficiently loaded
$(document).ready(function () {

    // toggle the dropdown (show or hide) upon button click
    $("#monthDataSelector").click(function () {
        $("#monthDropdown").toggle();
    });

    // Close the dropdown if the user clicks outside of it and update order display information
    $(window).click(function (event) {
        if (!event.target.matches("#monthDataSelector") && $("#monthDropdown").is(":visible")) {
            $("#monthDropdown").hide();

            // get the text of the selected month
            var newMonthText = $("#monthDataSelector").text();

            // send that text via POST, update order stats with info from response JSON
            $.post('/orders', newMonthText, function(responseData) {
                
                var incomingJson = $(responseData);

                var cherryStats = incomingJson[0].quantity + " " + incomingJson[0].topping;
                var chocolateStats = incomingJson[1].quantity + " " + incomingJson[1].topping;
                var plainStats = incomingJson[2].quantity + " " + incomingJson[2].topping;

                $("#cherryCount").text(cherryStats);
                $("#plainCount").text(plainStats);
                $("#chocolateCount").text(chocolateStats);

            });
            
        }
    });
});
