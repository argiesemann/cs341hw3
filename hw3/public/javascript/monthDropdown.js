//Andres Giesemann
//CS341 HW3

//ensure the script is only run when the page has been sufficiently loaded
$(document).ready(function () {

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
