//jshint esversion:6 

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
// set the view engine to ejs
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindofDay: day, newListItems: items});

});


app.post("/", (req,res) => {
    let item = req.body.newItem;
    items.push(item);

    res.redirect("/");
})


app.listen(3000, function () {
    console.log("Server started on port 3000");
});








    // var currentDay = today.getDay();
    // var day = ""

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday"
    //         break;
    //     case 1:
    //         day = "Monday"
    //         break;
    //     case 2:
    //         day = "Tuesday"
    //         break;
    //     case 3:
    //         day = "Wednesday"
    //         break;
    //     case 4:
    //         day = "Thursday"
    //         break;
    //     case 5:
    //         day = "Friday"
    //         break;
    //     case 6:
    //         day = "Saturday"
    //         break;
    //     default:
    //         console.log("Error: current day is equal to: " + currentDay);

    // }

    // if (currentDay === 0) {
    //     day = "Sunday";
    // } else if (currentDay === 1) {
    //     day = "Monday";
    // } else if (currentDay === 2) {
    //     day = "Tuesday";
    // } else if (currentDay === 3) {
    //     day = "Wednesday";
    // } else if (currentDay === 4) {
    //     day = "Thursday";
    // } else if (currentDay === 5 ) {
    //     day="Friday"
    // }
  


