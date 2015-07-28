// $("#main").append(["Maddie"]);

// [string].replace([old],[new]);


/*
This is empty on purpose! Your code to build the resume will go here.
 */

// var awesomeThoughts = "My name is Maddie and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log(funThoughts);

// $("#main").append(funThoughts);


var name = "Maddie Huebner"
var role = "Interaction Desinger"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



