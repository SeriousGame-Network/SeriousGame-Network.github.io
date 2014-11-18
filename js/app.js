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
        'sqnApp.userDataService',
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
      toastr.options.closeButton = true;
      toastr.options.newestOnTop = false;
      toastr.success("Bravo, vous avez marqué : " + $scope.score + " points !");
			window.location = "#/tab/dashboard";
		}
	};
});

app.controller("HomeController", function ($scope, $state) {
	$scope.navigateToSelectGame = function() {
		$state.transitionTo('tab.selectgame');
	};
  $scope.navigateToExplorer = function() {
		$state.transitionTo('tab.explorer');
	};
});

app.controller("SelectGameController", function ($scope) {
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
});

app.controller("ExplorerController", function ($scope, $state, sgnDataService) {
	$scope.msg = "msg---ExplorerController";      
	var data = sgnDataService.getData();
	$scope.level = sgnDataService.getData().level;
  $scope.goToNextTab = function() {
    $state.go('tab.questions');
  }  
});

app.controller("QuizzSelectController", function ($scope, $state, sgnDataService, userDataService) {
	$scope.currentUser = userDataService.getCurrentUser();
	
	$scope.selectedQuizz = undefined;
	$scope.availableQuiz = sgnDataService.getQuizzProfiles();

	$scope.pendingChallenges = $scope.currentUser.pendingChallenges;
	
	$scope.startSelectedQuizz = function(selectedQuizz) {
		$state.transitionTo('tab.questions');
	};
	
	$scope.startChallenge = function(challenge) {
		$state.transitionTo('tab.questions');
	};

});

app.controller("SendChallengeController", function ($scope, $state, sgnDataService, userDataService) {
	$scope.currentUser = userDataService.getCurrentUser();
	$scope.friendUsersToSend = userDataService.getFriendUsers($scope.currentUser); 
	$scope.availableQuizToSend = sgnDataService.getQuizzProfiles();

	$scope.challenge = {
		sendFrom : $scope.currentUser,
		sendTo : ($scope.friendUsersToSend.length == 1)? $scope.friendUsersToSend[0] : "",
		quizz : ""
	};
	
	$scope.sendEnable = false;
	
	$scope.sendChallenges = function() {
		for(i = 0; i< $scope.friendUsersToSend.length; i++) {
			var toUser = $scope.friendUsersToSend[i];
			if (toUser.selectedToSendChallenge) {
				var userChallenge = {
					sendFrom : $scope.currentUser,
					sendTo : toUser.name,
					quizz : $scope.challenge.quizz
					};			
				userDataService.sendChallenge(userChallenge);
			}
		}
		$state.transitionTo('tab.home');
	}
	
	$scope.toggleSelectedToSendChallenge = function(user) {
		user.selectedToSendChallenge = !user.selectedToSendChallenge;
		// enable send button?
		$scope.sendEnable = !!$scope.challenge.quizz;
	}

});

app.controller("QuizzPlayStartSelectController", function ($scope) {
});

app.controller("QuizzPlayEndController", function ($scope) {
});

app.controller("ContributeQuestionController", function ($scope, $state, sgnDataService) {

	$scope.question = {
		name : "choisissez un nom pour la question...",
		text : "posez votre question...",
		tags : "mots-clefs...",
		level : 3,
		answers : [
			{
			text : "bonne réponse...",
			score : 1.0
			},
			{
			text : "mauvaise réponse 1...",
			score : -1.0
			},
			{
			text : "mauvaise réponse 2...",
			score : -1.0
			}			
		]	
	};
	
	$scope.addAnswer = function() {
		var answer =  {
				text : "réponse...",
				score : -1.0
				};
		$scope.question.answers.push(answer);
		alert("answers.length: " + $scope.question.answers.length);
	};
	
	$scope.contributeQuestion = function() {
		var newQuestion = {
			name : $scope.question.name,
			text : $scope.question.text,
			answers : $scope.question.answers			
		};
		sgnDataService.contributeQuestion(newQuestion);
		$state.transitionTo('tab.home');
		
	};
});
	
app.controller("SgOverflowController", function ($scope, $state) {
  $scope.msg = "msg---SgOverflowController";      
  $scope.goToNextTab = function() {
    $state.go('tab.home');
  }  
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
    
    $stateProvider.state('tab.explorer', {
      url: "/explorer",
      views: {
          'tab-explorer': {
            templateUrl: 'templates/tab-explorer.html',
            controller: 'ExplorerController'
          }    	  
      }
    });

    $stateProvider.state('tab.quizzselect', {
        url: "/quizz-select",
        views: {
            'quizz-select': {
              templateUrl: 'templates/tab-quizz-select.html',
              controller: 'QuizzSelectController'
            }    	  
        }
      });

    $stateProvider.state('tab.sendchallenge', {
        url: "/sendchallenge",
        views: {
            'sendchallenge': {
              templateUrl: 'templates/tab-sendchallenge.html',
              controller: 'SendChallengeController'
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
            'tab-quizz-play-end': {
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

  $stateProvider.state('tab.contributequestion', {
      url: '/contributequestion',
      views: {
        'contributequestion': {
          templateUrl: 'templates/tab-contributequestion.html',
          controller: 'ContributeQuestionController'
        }
      }
    });

  $stateProvider.state('tab.sgoverflow', {
        url: "/sgoverflow",
        views: {
            'tab-sgoverflow': {
              templateUrl: 'templates/tab-sgoverflow.html',
              controller: 'SgOverflowController'
            }    	  
        }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

