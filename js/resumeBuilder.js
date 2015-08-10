'use strict';

var work = {
	"jobs": [
		{
			"employer": "Brady Corporation",
			"title": "User Experience Specialist",
			"location": "Milwaukee, WI",
			"dates": "August 2014 - Present",
			"description": "Integrate UX research and design into a cross-functional agile team, create wireframes/prototypes and utilize usability studies to quickly iterate, write basic HTML and CSS code for web-based projects."
		},
		{
			"employer": "Brady Corporation",
			"title": "User Experience Intern",
			"location": "Milwaukee, WI",
			"dates": "July 2013 - August 2014",
			"description": "Collaborated with UX team members to conduct research projects utilizing tools such as Omniture, Google Analytics, usability testing, heuristic evaluations, and landing page optimization; provided website design update recommendations to stakeholders and created prototypes using interactive wireframe software."
		},
		{
			"employer": "Brady Corporation",
			"title": "Marketing Research Intern",
			"location": "Milwaukee, WI",
			"dates": "April 2012 - July 2013",
			"description": "Organized multinational Customer Experience surveys from beginning to end including cleansing contact lists, executing survey launches, and analyzing customer feedback with Excel and SPSS to help Brady's leadership team make informed decisions. Increased action management completion rates by 40% year over year. Also conducted customer phone interviews, synthesized interview notes, and completed New Product Blueprinter training."
		},
		{
			"employer": "TLS Behavioral Health",
			"title": "Community Recovery Specialist",
			"location": "Milwaukee, WI",
			"dates": "June 2010 - April 2012",
			"description": "Cared for adults in a group home by auditing and passing medication, assisting with housekeeping tasks, and ensuring that each resident's activities of daily living were accomplished. Also adapted quickly to new situations based on resident moods and symptoms of physical and mental illness, and modeled effective communication skills to promote independence and build a working relationship with residents whom I saw on a regular basis."
		}
	]
}

var projects = {
	"project": [
		{
			"title": "Mobile Website",
			"dates": 2015,
			"description": "Brady's mobile website allows users to quickly complete common tasks in a mobile-friendly environment including searching for products, viewing product information, and contacting Brady.",
			"images": "http://loremflickr.com/g/320/240/project1"
		},
		{
			"title": "Product Registraion Form",
			"dates": "2015",
			"description": "Brady's product registration page allows users to select their product in a visually engaging way and register it with the company.",
			"images": "http://loremflickr.com/g/320/240/project2"
		},
		{
			"title": "Technical Support Form",
			"dates": "2015",
			"description": "Brady's technical support form allows users to contact Brady for product information and troubleshooting.",
			"images": "http://loremflickr.com/g/320/240/project3"
		}
	]
}

var bio = {
	"name" : "Maddie Huebner",
	"role" : "Interaction Designer",
	"contacts" : {
		"mobile" : "(312)361-4674",
		"email" : "maddie.huebner@gmail.com",
		"github" : "huebnema",
		"location" : "Milwaukee, WI"
	},
	"welcomeMessage" : "Welcome to my resume! I'm an interaction designer who likes to dabble with code.",
	"skills" : ["Interaction Design", "Usability Research", "Prototyping"],
	"bioPhoto" : "images/me.jpg"
}

var education = {
	"schools": [
		{
			"name": "University of Wisconsin - Milwaukee",
			"location": "Milwaukee, WI",
			"degree": "BBA - Major:  Marketing, Minor: Anthropology",
			"majors": "Marketing",
			"minor": "Anthropology",
			"dates": "September 2009 - August 2014",
			"url": "http://www4.uwm.edu/"
		},
		{
			"name": "Novancia Business School",
			"location": "Paris, France",
		 	"degree": "Study Abroad Program:  Immersion in European Business",
		 	"dates": "May 2014 - June 2014",
		 	"url": "http://www.novancia.fr/?lang=en"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
}

// Troubleshooted using:  https://discussions.udacity.com/t/skills-bio-is-not-showing-up-in-header/26961/4


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	if(bio.skills.length > 0) {



	}

	// Top info
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPhoto);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	//Skills section
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	//Footer info
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedLocation);

}

bio.display()

work.display = function() {

	$("#workExperience").append(HTMLworkStart);

	for(job in work.jobs) {

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

work.display()


//Code to capture clicks on the page

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});

//The code below adds an "Internationalize" button and formats the name like "Maddie HUEBNER."

//$("#main").append(internationalizeButton);

//function inName(finalName) {
//
//	var names = bio.name.split(" ");
//	names[1] = names[1].toUpperCase();
//	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();

//	finalName = names.join(" ");
//	return finalName;
//}


//title, dates, description, images
projects.display = function() {
	$("#projects").append(HTMLprojectStart);

	for(project in projects.project) {

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[project].images);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

projects.display()

//Add education to the page

education.display = function() {


	for(schools in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);
		var formattedDegreeName = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
		var formattedSchool = formattedSchoolName + formattedDegreeName;
		$(".education-entry:last").append(formattedSchool);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
		$(".education-entry:last").append(formattedSchoolLocation);

	}

	$("#education").append(HTMLonlineClasses);

	for(onlineCourses in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourses].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourses].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourses].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourses].url);

		var formattedOnline = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
		$(".education-entry:last").append(formattedOnline);

	}
};

education.display();


// Add the map to the page
$("#map-div").append(googleMap);









