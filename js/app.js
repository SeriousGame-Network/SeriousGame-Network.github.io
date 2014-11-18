// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('sgnApp', 
		[
        'ionic', 
        'starter.controllers', 'starter.services',
        
        'sgnApp.answerController',
        'sqnApp.dataService',
        'sgnApp.directives',
        'sgnApp.filters',
        'sgnApp.questionsController'        
        
        ])

.run(function($ionicPlatform) {
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
})

app.controller("TotoController", function($scope) {
	$scope.msg = "Hello";
});


app.controller("QuestionsController2", function ($scope, sgnDataService) {

	$scope.msg = "msg---QuestionsController2";
	var data = sgnDataService.getData();
	$scope.questions = sgnDataService.getData().questions;

	$scope.currentQuestionNb = 1;
	$scope.currentQuestion = $scope.questions[$scope.currentQuestionNb];

	$scope.selectedAnswers = [];
	$scope.score = 0;

	$scope.selectAnswer = function(answer) {

		$scope.selectedAnswers.push(answer);
		$scope.currentQuestionNb++;
		$scope.currentQuestion = $scope.questions[$scope.currentQuestionNb % 4];
		$scope.score += answer.score;

		if ($scope.currentQuestionNb == $scope.questions.length) {
			alert("Bravo, vous avez marqué : " + $scope.score + " points !");
			window.location = "#/tab/dashboard";
		}
	};
});


app.controller("HomeController", function ($scope, $state) {
	$scope.navigateToSelectGame = function() {
		$state.transitionTo('tab.selectgame');
	}
});

app.controller("SelectGameController", function ($scope, $state) {
	$scope.navigateToInProgress = function() {
		$state.transitionTo('inprogress');
	}
});

app.controller("DashboardController", function ($scope, sgnDataService) {

	$scope.msg = "msg---DashboardController";
	var data = sgnDataService.getData();
	$scope.level = sgnDataService.getData().level;
});

app.controller("InProgressController", function ($scope) {
});

app.controller("WheelController", function ($scope) {
});

app.controller("AutoEvalController", function ($scope, sgnDataService) {

	$scope.msg = "msg---AutoEvalController";
	var data = sgnDataService.getData();
	$scope.level = sgnDataService.getData().level;
}

app.controller("QuizzEditProfileCtrl", function ($scope, $state) {
});

app.controller("QuizzSendChallengeCtrl", function ($scope, $state) {
});


app.controller("QuizzSelectController", function ($scope, $state) {
});

app.controller("QuizzPlayStartSelectController", function ($scope, $state) {
});

app.controller("QuizzPlayEndController", function ($scope, $state) {
});

app.controller("InProgressCtrl", function ($scope, $state) {
	$scope.msg = "in progress...";
});



app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  $stateProvider.state('home', {
      url: "/home2",
      views: {
          'home2': {
            templateUrl: 'templates/tab-home.html',
            controller: 'HomeController'
          }    	  
      }
    });

    // setup an abstract state for the tabs directive
  $stateProvider.state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    });

    // Each tab has its own nav history stack:

  $stateProvider.state('tab.selectgame', {
      url: "/selectgame",
      views: {
          'tab-selectgame': {
            templateUrl: 'templates/tab-selectgame.html',
            controller: 'SelectGameController'
          }    	  
      }
    });

  $stateProvider.state('tab.home', {
      url: "/home",
      views: {
          'tab-home': {
            templateUrl: 'templates/tab-home.html',
            controller: 'HomeController'
          }    	  
      }
    });

    $stateProvider.state('tab.dashboard', {
      url: "/dashboard",
      views: {
          'tab-dashboard': {
            templateUrl: 'templates/tab-dashboard.html',
            controller: 'DashboardController'
          }    	  
      }
    });

  $stateProvider.state('tab.inprogress', {
      url: "/inprogress",
      views: {
          'inprogress': {
            templateUrl: 'templates/inprogress.html',
            controller: 'InProgressController'
          }    	  
      }
    });

  $stateProvider.state('tab.wheel', {
      url: "/wheel",
      views: {
          'wheel': {
            templateUrl: 'templates/spinwheel.html',
            controller: 'WheelController'
          }    	  
      }
    });

  $stateProvider.state('tab.autoeval', {
      url: "/autoeval",
      views: {
          'tab-autoeval': {
            templateUrl: 'templates/tab-autoeval.html',
            controller: 'AutoEvalController'
          }    	  
      }
    });

    $stateProvider.state('tab.playselect', {
        url: "/play-select",
=======
    
    

    $stateProvider.state('tab.quizzsendchallenge', {
        url: "/quizz-send-chalenge",
>>>>>>> test
        views: {
            'tab-quizz-send-chalenge': {
              templateUrl: 'templates/tab-quizz-send-chalenge.html',
              controller: 'QuizzSendChallengeCtrl'
            }    	  
        }
      });

    $stateProvider.state('tab.quizzeditprofile', {
        url: "/quizz-edit-profile",
        views: {
            'tab-quizz-edit-profile': {
              templateUrl: 'templates/tab-edit-profile.html',
              controller: 'QuizzEditProfileCtrl'
            }    	  
        }
      });
    
    $stateProvider.state('tab.quizzselect', {
        url: "/quizz-select",
        views: {
            'tab-quizz-select': {
              templateUrl: 'templates/tab-quizz-select.html',
              controller: 'QuizzSelectController'
            }    	  
        }
      });

    $stateProvider.state('tab.quizzplaystart', {
        url: "/quizz-start",
        views: {
            'tab-quizz-play-start': {
              templateUrl: 'templates/tab-quizz-play-start.html',
              controller: 'QuizzPlayStartController'
            }    	  
        }
      });

  $stateProvider.state('tab.questions', {
      url: '/questions',
      views: {
        'tab-questions': {
          templateUrl: 'templates/questions.html',
          controller: 'QuestionsController2'
        }
      }
    });

  $stateProvider.state('tab.quizzplayend', {
        url: "/quizz-end",
        views: {
            'tab-quizzplayend': {
              templateUrl: 'templates/tab-quizz-play-end.html',
              controller: 'QuizzPlayEndController'
            }    	  
        }
      });

    
  $stateProvider.state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    });

  $stateProvider.state('inprogress', {
      url: '/inprogress',
      views: {
        'inprogress': {
          templateUrl: 'templates/inprogress.html',
          controller: 'InProgressCtrl'
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

