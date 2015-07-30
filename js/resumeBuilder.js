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


// var name = "Maddie Huebner"
// var role = "Interaction Desinger"

// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);


var bio = {
	"name" : "Maddie",
	"role" : "Interaction Designer",
	"contacts" : {
		"phone" : "(312)361-4674"
	},
	"welcomeMessage" : "Welcome to my resume!",
	"skills" : [
		"Interaction Design", "Usability Research", "Prototyping"
		],
	"bioPhoto" : "images/me.jpg"
};


$("#header").prepend(bio.name);

// var formattedMobile = HTMLmobile.replace(%data%, bio.contacts.phone);
// $("topContacts").prepend(formattedMobile);


var work = {};
work.position = "Interaction Designer";
work.employer = "Brady Corporation";
work.years = "1";
work.city = "Milwaukee";

// var education = {};
// education["name"] = "University of Wisconsin - Milwaukee";
// education["city"] = "Milwaukee";

// $("#main").append(work["position"]);
// $("#main").append(education.name);

var education = {
	"schools": [
		{
			"name": "University of Wisconsin - Milwaukee",
			"city": "Milwaukee, WI, US",
			"degree": "BBA",
			"major": "Marketing",
			"minor": "Anthropology",
			"graduationYear": 2014
		}
	],
	"onlinePrograms": [
		{
			"title": "Front-end Nanodegree",
			"school": "Udacity",
			"dates": 2015
		}
	]
}


