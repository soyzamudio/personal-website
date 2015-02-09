var jz = angular.module("jZamudio", []);

jz.controller("ZamudioController", ['$scope', function($scope) {

  $scope.social = [
    { link: 'mailto:jose@josezamudio.me', icon: 'fa-envelope-o' },
    { link: 'http://twitter.com/soyzamudio', icon: 'fa-twitter' },
    { link: 'http://github.com/soyzamudio', icon: 'fa-github' },
    { link: 'http://linkedin.com/in/josezamudio', icon: 'fa-linkedin' },
    { link: 'http://stackoverflow.com/users/3314997/jose-zamudio', icon: 'fa-stack-overflow' }
  ];

  $scope.portfolio = [
    { title: "CarWise", category: "iOS", website: "http://www.carwise.me", image: "img/carwise-app.jpg" },
    { title: "AirTym", category: "iOS, Web", website: "http://www.airtym.co", image: "img/airtym-app.jpg" },
    { title: "TweeterBoard", category: "Web", website: "http://tweeterboard.herokuapp.com/", image: "img/tweeterboard-app.jpg" }
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
    { title: 'Arrived at the [coding] house', body: 'Today I finally arrived at San Jose International Airport to begin the journey. The program begins tomorrow with the introduction of all of the students (I was the first to arrive so I got to choose my bed and working station :P) and what the program is going to be…', author: $scope.author, tags: ['Programmer', 'Bootcamp', 'Programming', 'Software', 'Coding'], link: 'arrived-at-the-coding-house/', date: '25 Jan 2015' }
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
