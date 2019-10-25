/* Creates a JQuery functions that hides and shows specified tag */
$(document).ready(function() {
    $("#branch").hide();
});

$(document).ready(function() {
    $("#addr").hide();
});


$("#radCol").click(function() {
    $("#addr").hide();
    $("#branch").show();
});


$("#radDev").click(function() {
    $("#branch").hide();
    $("#addr").show();
})

/* Creates variable from specified ID */
var brCont = $("#brList");

/* Creates an array */
var brList = ["Cape Town", "Durban", "Joburg"];

/* Appends the drop down with tags and text */
$.each(brList, function(value, text) {
    brCont.append($("<option></option>").val(text).html(text));
});


function shipSav() {
    /* Creates variable from specified ID */
    var collect = document.getElementById("radCol");
    var delivery = document.getElementById("radDev");

    var devList = [];
    var textStr = document.getElementById("strN").value;
    var textBurb = document.getElementById("sburb").value;
    var textCity = document.getElementById("city").value;
    var textSP = document.getElementById("stPr").value;
    var textCountry = document.getElementById("cntry").value;

    var choose = document.getElementById("brList").value;

    /* Gets the containers values */
    totPrice = parseFloat(localStorage.getItem("Total"));

    /* If the specified radio button is selected the corresponding code executes */
    if (collect.checked) {

        /* Saves containers value with a new incremented value */
        localStorage.setItem("Total", totPrice += 20);
        localStorage.setItem("Location", JSON.stringify(choose));

        /* Generates a pop with text */
        alert("Your shipping choice has been save. The collection cost is R20 and brings your total to R" + totPrice + " and the location for collection is " + choose);
    } else if (delivery.checked) {
        devList.push(textStr, textBurb, textCity, textSP, textCountry);

        localStorage.setItem("Location", JSON.stringify(devList));
        console.log(devList)

        localStorage.setItem("Total", totPrice += 40);
        /* Refreshes page */
        location.reload();
        alert("Your shipping choice has been save. The delivery cost is R40 and brings your total to R" + totPrice);
    }
}