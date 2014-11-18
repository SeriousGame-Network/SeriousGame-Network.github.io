'use strict';


var app = angular.module('sgnApp', 
		[ 'ionic', 
		  // 'ngRoute', // conflict with ionic! 
		 
		 'sgnApp.questionsController', 
		 'sgnApp.answerController', 
		 'sqnApp.dataService', 
		 'sgnApp.filters', 
		 'sgnApp.services', 
		 'sgnApp.directives'
		 ]);

app.controller("TestController", function() {
	
});

app.run(function($ionicPlatform) {
	  $ionicPlatform.ready(function() {
	    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if(window.cordova && window.cordova.plugins.Keyboard) {
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    }
	    if(window.StatusBar) {
	      // org.apache.cordova.statusbar required
	      StatusBar.styleDefault();
	    }
	  });
	});

app.config(function($stateProvider, $urlRouterProvider) {

	  // Ionic uses AngularUI Router which uses the concept of states
	  // Learn more here: https://github.com/angular-ui/ui-router
	  // Set up the various states which the app can be in.
	  // Each state's controller can be found in controllers.js

    // setup an abstract state for the tabs directive
	$stateProvider.state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    $stateProvider.state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    
		$stateProvider.state('questions', {
	      url: "/questions",
	      views: {
		        'questions': {
		          templateUrl: 'templates/questions.html',
		          controller: 'QuestionsController'
		        }
		      }
	    })

	    // $urlRouterProvider.otherwise({redirectTo:'/questions'});
	    $urlRouterProvider.otherwise('/questions');
	    
/*	    
	
  $stateProvider.state('/test', {
	  templateUrl: 'templates/test.html', 
	  controller: 'TestController'
	  });

  $stateProvider.state('/questions', {
	  templateUrl: 'templates/questions.html', 
	  controller: 'QuestionsController' });

  $stateProvider.state('/questions/:questionNo', {
	  templateUrl:'templates/questions.html', 
	  controller: 'QuestionsController'});

  $stateProvider.state('/results', {
	  templateUrl:'templates/results.html', 
	  controller: 'ResultController'});

  */
	    
});

