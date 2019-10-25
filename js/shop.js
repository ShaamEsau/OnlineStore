/* Creates an object with key-value pairs */
var gamePrices = { "SniperElite": 400, "NFL": 650, "MHW": 700, "NFS": 450 };

/* Saves object in a JSON readable object */
localStorage.setItem("Games", JSON.stringify(gamePrices));

/* Gets the value from the container and sets it as float */
var totPrice = parseFloat(localStorage.getItem("Total"));

if (!totPrice) {
    /* Creates a empty variable and array */
    var totPrice = 0;
    var cart = [];
    localStorage.setItem("Cart", JSON.stringify(cart));
} else {
    cart = JSON.parse(localStorage.getItem("Cart"));
}

localStorage.setItem("Total", totPrice);

function addSnipe() {
    gamesList = JSON.parse(localStorage.getItem("Games"));
    totPrice = parseFloat(localStorage.getItem("Total"));
    cart = JSON.parse(localStorage.getItem("Cart"));

    /* Inserts element into the array */
    cart.push("Sniper Elite 4");

    localStorage.setItem("Cart", JSON.stringify(cart));

    /* Sets variable with a new incremented value */
    localStorage.setItem("Total", totPrice += gamesList.SniperElite + (gamesList.SniperElite * 0.15));
    /* Generates a pop up with text  */
    alert("The total comes to " + "R" + totPrice + " (VAT included)");
}


function addNFL() {
    gamesList = JSON.parse(localStorage.getItem("Games"));
    totPrice = parseFloat(localStorage.getItem("Total"));
    cart = JSON.parse(localStorage.getItem("Cart"));

    cart.push("Madden NFL 19");

    localStorage.setItem("Cart", JSON.stringify(cart));

    localStorage.setItem("Total", totPrice += gamesList.NFL + (gamesList.NFL * 0.15));

    alert("The total comes to " + "R" + totPrice + " (VAT included)");
}

function addMHW() {
    gamesList = JSON.parse(localStorage.getItem("Games"));
    totPrice = parseFloat(localStorage.getItem("Total"));
    cart = JSON.parse(localStorage.getItem("Cart"));

    cart.push("Monster Hunter World");

    localStorage.setItem("Cart", JSON.stringify(cart));

    localStorage.setItem("Total", totPrice += gamesList.MHW + (gamesList.MHW * 0.15));

    alert("The total comes to " + "R" + totPrice + " (VAT included)");
}

function addNFS() {
    gamesList = JSON.parse(localStorage.getItem("Games"));
    totPrice = parseFloat(localStorage.getItem("Total"));
    cart = JSON.parse(localStorage.getItem("Cart"));

    cart.push("Need for Speed Payback");

    localStorage.setItem("Cart", JSON.stringify(cart));

    localStorage.setItem("Total", totPrice += gamesList.NFS + (gamesList.NFS * 0.15));

    alert("The total comes to " + "R" + totPrice + " (VAT included)");
}