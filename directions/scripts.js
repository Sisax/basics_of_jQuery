let color = "purple";
let number = 10;
let word = "cool";

if (color == "purple") {
    $("#first").css({backgroundColor: "purple"});
}

if (number > 100) {
    $("#second").text("woah, thats a big number");
} else {
    $("#second").text("just a regular number, please");
}

if (word == "cool") {
    $("#third").text("Power of DOM");
} else {
    $("#fourth").text("Power of DOM");
}