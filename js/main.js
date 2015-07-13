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
    { title: 'Scrimmagr', category: 'Android, iOS', website: 'http://scrimmagr.me', image: 'img/scrimmagr-app.jpg', techs: ['JavaScript', 'Ionic', 'Angular.js', 'Firebase', 'Polymer']},
    { title: "Ecco", category: "Web", website: "http://www.eccoapp.club", image: "img/ecco-app.jpg", techs: ['Node.js', 'Express.js', 'Angular.js', 'MongoDB']},
    { title: "CarWise", category: "iOS", website: "http://www.carwise.me", image: "img/carwise-app.jpg", techs: ['Objective-C', 'Swift', 'Cocoapods', 'Parse.com']},
    { title: "AirTym", category: "iOS, Web", website: "http://www.airtym.co", image: "img/airtym-app.jpg", techs: ['Objective-C', 'Swift', 'Cocoapods', 'JavaScript', 'HTML/CSS']},
    { title: "TweeterBoard", category: "Web", website: "http://tweeterboard.herokuapp.com/", image: "img/tweeterboard-app.jpg", techs: ['JavaScript', 'jQuery', 'Twitter', 'API', 'HTML/CSS']},
    { title: "JavaScript Calculator", category: "Web", website: "https://soyzamudio.github.io/iOS-Calculator-Javascript/", image: "img/calc-app.jpg", techs: ['JavaScript', 'jQuery', 'HTML/CSS']},
    { title: 'Weather App', category: 'Web', website: 'http://soyzamudio.github.io/weather-app/', image: 'img/weather-app.jpg', techs: ['JavaScript', 'jQuery', 'Angular', 'HTML/CSS']},
    { title: 'Hstl.', category: 'Web', website: 'http://hstl.herokuapp.com', image: 'img/hstl-app.jpg', techs: ['Node.js', 'Angular.js', 'Hapi.js', 'MongoDB']},
    { title: 'resQ', category: 'Web', website: 'http://resq-shelter.herokuapp.com/', image: 'img/resq-app.jpg', techs: ['Node.js', 'Angular.js', 'Hapi.js', 'MongoDB']},
    { title: 'Open-Market', category: 'Web', website: 'http://open-market.herokuapp.com', image: 'img/openmarket-app.jpg', techs: ['Node.js', 'Angular.js', 'Hapi.js', 'MongoDB']},
    { title: 'To Do', category: 'Web',  website: 'http://tododo-app.herokuapp.com/', image: 'img/todo-app.jpg', techs: ['Node.js', 'Angular.js', 'Hapi.js', 'MongoDB']}
  ];

  $scope.skills = [
    { title: 'HTML 5', image: 'img/html.png' },
    { title: 'CSS 3', image: 'img/css.png' },
    { title: 'Javascript', image: 'img/javascript.jpg' },
    { title: 'MongoDB', image: "img/mongodb.png" },
    { title: 'HapiJS', image: "img/hapi.png" },
    { title: 'AngularJS', image: "img/angular.png" },
    { title: 'NodeJS', image: "img/node.png" },
    { title: 'CoffeeScript', image: 'img/coffeescript.png' }
  ]

  $scope.experience = [
    { company: 'ShopStyle / POPSUGAR, Inc.', position: 'JavaScript Engineer', description: 'Work on ShopStyle e-commerce site. Using Angular.js and CoffeeScript as my main framework and language. Fixing bugs and adding new features to the website.', logo: 'img/popsugar.jpg' },
    { company: 'Coding House Institute', position: 'Teacher Assistant', description: 'Help students of the web development bootcamp during all day lectures. Writing articles on related topics. Tutoring students who need help 24/7.', logo: 'img/codinghouse.jpg'},
    { company: 'Freelance', position: 'Full Stack Web Developer', description: 'Web development using the latest technologies such as Node.js/Express.js and Ruby on Rails. Create iOS applications using the new Apple language: Swift.', logo: '' },
    { company: 'AirTym', position: 'Co-Founder & Developer', description: 'Responsible for designing the website as well as the mockups for the mobile application. Helped with the development of the iOS prototype using Swift. Responsible for finding a partner for the CTO position.', logo: 'img/airtym.png' },
    { company: 'ZV Services', position: 'IT Manager', description: 'Setup and maintain all systems and servers and website for three different locations. Train and support all IT employees within the company.', logo: '' },
  ];

  $scope.author = { name: 'Jose Zamudio', email: 'jose@josezamudio.me' };

  $scope.blog = [
    { title: 'Setting Up Gulp for the First Time', body: 'Gulp.js is a Task/Build runner that makes use of pipes for streaming data that needs to be processed. So, how can Gulp.js help during the development process? There are many programming languages that have extensions that make it easier or more elegant to develop big projects. This extensions can be more powerful at development time by adding features that were not available in the original language.', author: $scope.author, tags: ['Developer', 'Javascript', 'HTML', 'CSS', 'Angular-js', 'gulp', 'task', 'coffeescript', 'jade', 'sass'], link: 'setting-up-gulp-for-the-first-time/', date: '12 June 2015'},
    { title: 'Simple Web App - Part I - Node.js', body: "In the next set of articles we are going to build a simple app using Node.js, Hapi.js, Angular.js and MongoDB. What is Node.js? The quick answer: Node is Javascript on the server. Node.js works on a v8 environment, which is what Google uses as the…", author: $scope.author, tags: ['Node-js', 'MongoDB', 'Hapi-js', 'Angular-js', 'Web', 'App'], link: 'simple-web-app-part-i-node-js/', date: '02 Mar 2015' },
    { title: 'APIs made easy', body: "For the past week or two we have been working a lot with APIs. We have used the Twitter API, the Facebook API, the Weather Underground API and many others. From what I've learned APIs are one of the most important concepts in the web development industry. But first let…", author: $scope.author, tags: ['Programming', 'Javascript', 'API', 'Callbacks'], link: 'apis-made-easy/', date: '16 Feb 2015' },
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
