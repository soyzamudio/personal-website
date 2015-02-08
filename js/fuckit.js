var jz = angular.module("jZamudio", []);

jz.controller("ZamudioController", ['$scope', function($scope) {

  $scope.portfolio = [
    { title: "CarWise", category: "iOS", website: "http://www.carwise.me", image: "img/profile-pic.jpg" },
    { title: "AirTym", category: "iOS, Web", website: "http://www.airtym.me" },
  ];

  $scope.experience = [
    { company: 'Freelance', position: 'Full Stack Web Developer', description: 'Web development using the latest technologies such as Node.js/Express.js and Ruby on Rails. Create iOS applications using the new Apple language: Swift.', logo: '' },
    { company: 'AirTym', position: 'Co-Founder & Developer', description: 'Responsible for designing the website as well as the mockups for the mobile application. Helped with the development of the iOS prototype using Swift. Responsible for finding a partner for the CTO position.', logo: 'img/airtym.png' },
    { company: 'ZV Services', position: 'IT Manager', description: 'Setup and maintain all systems and servers and website for three different locations. Train and support all IT employees within the company.', logo: '' }
  ];

  $scope.author = { name: 'Jose Zamudio', email: 'jose@josezamudio.me' };

  $scope.blog = [
    { title: 'Installing Ghost.', body: 'I have been working on my new blog design for the past three days using Ghost, a Node.js blogging platform, and yesterday I got stuck trying to upload it to Heroku. I went to all of the process of modifying the config.js with all of my server settings but at the end it crashed because Heroku was being arrogant and not accepting my settings (settings that Heroku itself gave me...)', author: $scope.author, tags: ['Node-js', 'Ghost', 'Heroku', 'Terminal', 'Command Line Interface', 'Coding House', 'Javascript', 'HTML', 'CSS'], link: 'http://josezamudio.herokuapp.com/installing-ghost/', date: '30 Jan 2015' },
    { title: 'Arrived at the [coding] house', body: 'Today I finally arrived at San Jose International Airport to begin the journey. The program begins tomorrow with the introduction of all of the students (I was the first to arrive so I got to choose my bed and working station :P) and what the program is going to be all about.', author: $scope.author, tags: ['Programmer', 'Bootcamp', 'Programming', 'Software', 'Coding'], link: 'http://josezamudio.herokuapp.com/arrived-at-the-coding-house/', date: '25 Jan 2015' },
    { title: 'On my way to Coding House Institute', body: 'I recently got accepted to Coding House Institute and begin on January 25th, 2015. Coding House is a fully immersive program which prepares students to become Web Developers and change their lives in 60 days. I will be posting regularly about my days in the program.', author: $scope.author, tags:  ['Developer', 'Programmer', 'Bootcamp', 'Blog'], link: 'http://josezamudio.herokuapp.com/on-my-way-to-coding-house-institute/', date: '12 Jan 2015' }
  ];

  $scope.name = "Stranger";
  $scope.filter = "";

  $scope.changeName = function() {
    if ($scope.user == "") {
      $scope.name = "Stranger";
    } else {
      $scope.name = $scope.user;
    }
  };

  $scope.filterByAll = function() {
    $scope.filter = "";
    console.log($scope.filter);
  };

  $scope.filterByiOS = function() {
    $scope.filter = "iOS";
    console.log($scope.filter);
  };

  $scope.filterByAndroid = function() {
    $scope.filter = "Android";
    console.log($scope.filter);
  };

  $scope.filterByWeb = function() {
    $scope.filter = "Web"
    console.log($scope.filter);
  };

  $scope.result = 'hidden'
  $scope.resultMessage;
  $scope.formData; //formData is an object holding the name, email, subject, and message
  $scope.submitButtonDisabled = false;
  $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
  $scope.submit = function(contactform) {
    $scope.submitted = true;
    $scope.submitButtonDisabled = true;
    if (contactform.$valid) {
      $http({
        method  : 'POST',
        url     : 'form.php',
        data    : $.param($scope.formData),  //param method from jQuery
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
        console.log(data);
        if (data.success) { //success comes from the return json object
          $scope.submitButtonDisabled = true;
          $scope.resultMessage = data.message;
          $scope.result='bg-success';
        } else {
          $scope.submitButtonDisabled = false;
          $scope.resultMessage = data.message;
          $scope.result='bg-danger';
        }
      });
    } else {
      $scope.submitButtonDisabled = false;
      $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
      $scope.result='bg-danger';
    }
  }


}]);
