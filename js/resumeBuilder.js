/* Resume Data
=======================================================*/

var bio = {
  'name': 'Benjamin Hong',
  'role': 'UX Developer',
  'contacts': {
    'mobile': '240-899-7429',
    'email': 'benjamindhong@gmail.com',
    'twitter': '@bencodezen',
    'location': 'Washington D.C.'
  },
  'picture': 'images/fry.jpg',
  'welcome': 'Nice to meet you!',
  'skills': ['HTML', 'CSS', 'JavaScript', 'UX', 'Swift', 'iOS', 'Ruby on Rails']
};

var work = {
  'jobs': [
    {
      'company': 'Element 84',
      'location': 'Alexandria, VA',
      'title': 'Software Engineer',
      'dates': '2015-Current',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quia culpa facere dolorum repellat soluta quaerat, quisquam sed et beatae itaque pariatur ducimus ea illum iste ullam harum reprehenderit doloribus.'
    },
    {
      'company': 'Aquilent',
      'location': 'Laurel, MD',
      'title': 'UX/Technical Consultant',
      'dates': '2012-2015',
      'description': 'Voluptates eius voluptate quae facere voluptatibus distinctio repellendus ratione fuga. Necessitatibus quibusdam eum neque recusandae eius similique, hic delectus facilis ullam, debitis accusamus laborum obcaecati cupiditate, eligendi ducimus quas aliquid!'
    }
  ]
};

var education = {
  'schools': [
    {
      'name': 'University of Maryland, Baltimore County',
      'location': 'Catonsville, MD',
      'degree': 'Master of Professional Studies',
      'major': 'Industrial/Organizational Psychology',
      'dates': '2010-2012'
    },
    { 
      'name': 'University of Maryland, Baltimore County',
      'location': 'Catonsville, MD',
      'degree': 'Bachelor of Science',
      'major': 'Psychology',
      'dates': '2006-2010'
    }
  ],
  'online': [
    {
      'name': 'Udacity',
      'program': 'Front-End Development',
      'year': '2015'
    },
    {
      'name': 'Bloc.io',
      'program': 'Full Stack Development',
      'year': '2014-2015'
    }
  ]
};

var projects = {
  'projects': [ 
    {
      'company': 'Myolo',
      'work': 'Front-End Development',
      'year': '2015'
    }, 
    {
      'company': 'Aestar',
      'work': 'WordPress & Front-End Development',
      'year': '2015'
    }
  ]
};

/* Display Functions
=======================================================*/

bio.display = function() {
  "use strict";
  
  $('#header').prepend( HTMLheaderRole.replace('%data%', bio.role) );
  $('#header').prepend( HTMLheaderName.replace('%data%', bio.name) );
  $('#header').append( HTMLwelcomeMsg.replace('%data%', bio.welcome));
  $('#header').append( HTMLbioPic.replace('%data%', bio.picture));

  if( bio.skills.length > 0 ) {
    $('#header').append(HTMLskillsStart);

    for( var skill in bio.skills ) {
      var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
      $('#skills').append(formattedSkill);
    }
  }
};

bio.contacts.display = function() {
  "use strict"; 

  var sections = ['#topContacts', '#footerContacts'];

  for ( var section in sections ) {
    console.log(section);
    $(sections[section]).append( HTMLmobile.replace('%data%', bio.contacts.mobile));
    $(sections[section]).append( HTMLemail.replace('%data%', bio.contacts.email));
    $(sections[section]).append( HTMLtwitter.replace('%data%', bio.contacts.twitter));
    $(sections[section]).append( HTMLlocation.replace('%data%', bio.contacts.location));
  }
};

education.display = function() {
  "use strict";

  for ( var school in education.schools ) {
    $('#education').append(HTMLschoolStart);

    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
    var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);

    $('.education-entry:last').prepend(formattedSchoolName + formattedSchoolDegree);

    var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
    $('.education-entry:last').append(formattedDates);

    var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
    $('.education-entry:last').append(formattedMajor);
  }
};

work.display = function() {
  "use strict";

  for( var position in work.positions ) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[position].company);
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[position].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('.work-entry:last').append( formattedEmployerTitle );

    var formattedDates = HTMLworkDates.replace('%data%', work.jobs[position].dates);
    $('.work-entry:last').append( formattedDates );
    
    var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[position].location);
    $('.work-entry:last').append( formattedLocation );

    var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[position].description);
    $('.work-entry:last').append( formattedDescription );
  }
};

projects.display = function() {
  for( var project in projects.projects) {
    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].company);
    $('.project-entry:last').append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].year);
    $('.project-entry:last').append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].work);
    $('.project-entry:last').append(formattedDescription);
  }
};

/* HTML Modifications
=======================================================*/

bio.display();

bio.contacts.display();

work.display();

projects.display();

education.display();

$('#mapDiv').append(googleMap);


