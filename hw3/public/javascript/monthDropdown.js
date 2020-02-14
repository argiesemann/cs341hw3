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
                
                var incomingJson = responseData;

                var cherryCount = 0;
                var plainCount = 0;
                var chocolateCount = 0;

                //iterate through the objects returned and count number of cheesecakes
                //with each topping option
                for (var i = 0; i < incomingJson.length; i++) {
                    
                    if (incomingJson[i].TOPPING == "cherry") {
                        cherryCount += incomingJson[i].QUANTITY;
                    }

                    else if (incomingJson[i].TOPPING == "plain") {
                        plainCount += incomingJson[i].QUANTITY;
                    }

                    else if (incomingJson[i].TOPPING == "chocolate") {
                        chocolateCount += incomingJson[i].QUANTITY;
                    }

                }

                var cherryStats = cherryCount + " cherry";
                var chocolateStats = chocolateCount + " chocolate";
                var plainStats = plainCount + " plain";
                
                //update the html to reflect new information
                $("#cherryCount").text(cherryStats);
                $("#plainCount").text(plainStats);
                $("#chocolateCount").text(chocolateStats);

            });
            
        }
    });
});
