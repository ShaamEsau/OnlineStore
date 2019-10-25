/* Sets a variable from the data stored locally */
var totPrice = parseFloat(localStorage.getItem("Total"));
var local = localStorage.getItem("Location");
//console.log(typeof local);
/* Sets a variable by retrieving an element using it's ID */
var totOut = document.getElementById("prodTotal");

/* Sets a variable that creates an element */
var price = document.createElement("h3");

/* Puts text in the element */
price.innerHTML = "R" + totPrice;

/* Adds an element to to the div of the html page */
totOut.appendChild(price);

var cart = JSON.parse(localStorage.getItem("Cart"));
var cartLen = cart.length;

var gList = document.createElement("ol");

var gItem = document.getElementById("itemList");

/* While the cart variable is not empty the code inside it will execute */
if (cart != null) {

    for (var i = 0; i < cart.length; i++) {

        var listItem = document.createElement("li");
        /* Creates a list item text */
        var listText = document.createTextNode(cart[i]);

        /* Adds tag to the specified div tag of the html page */
        gItem.appendChild(gList);
        listItem.appendChild(listText);
        gList.appendChild(listItem);

    }
}


/* Creates variable from specified ID */
var cartList = $("#cartList");
var idCreate = 0;

/* Appends the drop down with tags and text */
$.each(cart, function(value, text) {
    cartList.append($("<option></option>").val(text).html(text));
});

function cartRev() {
    var selItem = document.getElementById("cartList").selectedIndex;
    var itemName = document.getElementById("cartList").value;
    gamesList = JSON.parse(localStorage.getItem("Games"));

    /* Checks to see if the value of the option tag matches and executes the corresponding function */
    if (itemName == "Sniper Elite 4") {
        /* Removes list item that matches the selected option */
        cart.splice(selItem, 1);
        localStorage.setItem("Cart", JSON.stringify(cart));
        /* Decrements the total cost */
        localStorage.setItem("Total", totPrice -= gamesList.SniperElite + (gamesList.SniperElite * 0.15));
    } else if (itemName == "Madden NFL 19") {
        cart.splice(selItem, 1);
        localStorage.setItem("Cart", JSON.stringify(cart));
        localStorage.setItem("Total", totPrice -= gamesList.NFL + (gamesList.NFL * 0.15));
    }else if (itemName == "Monster Hunter World") {
        cart.splice(selItem, 1);
        localStorage.setItem("Cart", JSON.stringify(cart));
        localStorage.setItem("Total", totPrice -= gamesList.MHW + (gamesList.MHW * 0.15));
    }else if (itemName == "Need for Speed Payback") {
        cart.splice(selItem, 1);
        localStorage.setItem("Cart", JSON.stringify(cart));
        localStorage.setItem("Total", totPrice -= gamesList.NFS + (gamesList.NFS * 0.15));
    }
    /* Refreshes and updates the site */
    location.reload();
}


/* Creates a one time click function to a button */
$("#discount").one("click", function() {
    /* Generates a 16 digit random string of letters and numbers thats cut to 4 */
    var discNum = (Math.random() * 0xffffff).toString(16).slice(0, 4);

    /* Generates a pop up with text displayed in it */
    alert("Your discount code is " + discNum);

    /* Temporarily saves data */
    sessionStorage.setItem("Discount", discNum);
});

function Purchase() {


    var useCode = sessionStorage.getItem("Discount");
    var discCode = document.getElementById("discText").value;
    /* Refreshes page with new information */
    location.reload();
    var refNum = (Math.random() * 0xffffff).toString(16);
    if (cartLen != 0 && local != "null") {

        /* Sets containers as empty */
        localStorage.setItem("Total", 0);
        localStorage.setItem("Cart", JSON.stringify([]));
        localStorage.setItem("Location", null);

        /* Checks if the users input matches the value stored and executes the respective output */
        if (useCode == discCode) {
            sessionStorage.setItem("Discount", null);
            totPrice = totPrice - 300;

            alert("Total is R" + totPrice + ". Your purchase has been successfully made! Enjoy the game(s)!!!!!!!!!!! Your Reference Number is : " + refNum);
        } else {

            alert("Total is R" + totPrice + ". Your purchase has been successfully made! Enjoy the game(s)!!!!!!!!!!! Your Reference Number is : " + refNum);
        }

    } else {

        alert("Please make sure cart is not empty and shipping or collection options have been selected");
    }
}