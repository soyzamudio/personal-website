var jz = angular.module("jZamudio", []);

jz.controller("ZamudioController", ['$scope', function($scope) {

  $scope.portfolio = [
    { title: "CarWise", category: "iOS", website: "http://www.carwise.me", image: "img/carwise-app.jpg" },
    { title: "AirTym", category: "iOS, Web", website: "http://www.airtym.me", image: "" },
    { title: "TweeterBoard", category: "Web", website: "http://tweeterboard.herokuapp.com/", image: "" }
  ];

  $scope.experience = [
    { company: 'Freelance', position: 'Full Stack Web Developer', description: 'Web development using the latest technologies such as Node.js/Express.js and Ruby on Rails. Create iOS applications using the new Apple language: Swift.', logo: '' },
    { company: 'AirTym', position: 'Co-Founder & Developer', description: 'Responsible for designing the website as well as the mockups for the mobile application. Helped with the development of the iOS prototype using Swift. Responsible for finding a partner for the CTO position.', logo: 'img/airtym.png' },
    { company: 'ZV Services', position: 'IT Manager', description: 'Setup and maintain all systems and servers and website for three different locations. Train and support all IT employees within the company.', logo: '' },
  ];

  $scope.author = { name: 'Jose Zamudio', email: 'jose@josezamudio.me' };

  $scope.blog = [
    { title: 'Hackathon 101', body: 'Two weeks into our coding bootcamp at codinghouse we decided to attend our first hackathon. We registered to attend @developerweek as our first hackathon experience. We are beginners in this industry but we took it as a way to get more experience and network with recruiters that attend the event…', author: $scope.author, tags: ['Programming', 'Coding', 'Hackathon', 'Developer Week', 'Tips', 'Hacking'], link: 'hackathon-101/', date: '08 Feb 2015' },
    { title: 'Installing Ghost.', body: 'I have been working on my new blog design for the past three days using Ghost, a Node.js blogging platform, and yesterday I got stuck trying to upload it to Heroku. I went to all of the process of modifying the config.js with all of my server settings…', author: $scope.author, tags: ['Node-js', 'Ghost', 'Heroku', 'Terminal', 'Command Line Interface', 'Coding House', 'Javascript', 'HTML', 'CSS'], link: 'installing-ghost/', date: '30 Jan 2015' },
    { title: 'Arrived at the [coding] house', body: 'Today I finally arrived at San Jose International Airport to begin the journey. The program begins tomorrow with the introduction of all of the students (I was the first to arrive so I got to choose my bed and working station :P) and what the program is going to be…', author: $scope.author, tags: ['Programmer', 'Bootcamp', 'Programming', 'Software', 'Coding'], link: 'arrived-at-the-coding-house/', date: '25 Jan 2015' },
    { title: 'On my way to Coding House Institute', body: 'I recently got accepted to Coding House Institute and begin on January 25th, 2015. Coding House is a fully immersive program which prepares students to become Web Developers and change their lives in 60 days. I will be posting regularly about my days in the program…', author: $scope.author, tags:  ['Developer', 'Programmer', 'Bootcamp', 'Blog'], link: 'on-my-way-to-coding-house-institute/', date: '12 Jan 2015' }
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
  };

  $scope.filterByiOS = function() {
    $scope.filter = "iOS";
  };

  $scope.filterByAndroid = function() {
    $scope.filter = "Android";
  };

  $scope.filterByWeb = function() {
    $scope.filter = "Web"
  };

}]);
