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
            var textObject = { text: newMonthText };

            // send that text via POST, update order stats with info from response JSON
            $.post('/orders', textObject, function(responseData) {
                
                var incomingJson = $(responseData);

                console.log("" + incomingJson);

                var cherryCount = 0;
                var plainCount = 0;
                var chocolateCount = 0;

                var i;

                for (i = 0; i < incomingJson.length; i++) {
                    
                    if (incomingJson.TOPPING == "cherry") {
                        cherryCount++;
                    }

                    else if (incomingJson.TOPPING == "plain") {
                        plainCount++;
                    }

                    else if (incomingJson.TOPPING == "chocolate") {
                        chocolateCount++;
                    }

                }

                var cherryStats = cherryCount + " cherry";
                var chocolateStats = chocolateCount + " chocolate";
                var plainStats = plainCount + " plain";

                $("#cherryCount").text(cherryStats);
                $("#plainCount").text(plainStats);
                $("#chocolateCount").text(chocolateStats);

            });
            
        }
    });
});
