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
