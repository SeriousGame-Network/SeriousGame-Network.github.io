
angular.module("sgnApp.questionsController", [ "sqnApp.dataService" ])
.controller("QuestionsController", 
		function ($scope, $http, $routeParams, $location) {
// , sgnDataService
	
	$scope.msg = "Test";
	$scope.questions = [ { text: "q1" }, { text: "q2"} ]; //
		// sgnDataService.getData().questions;

	/*
		  $scope.questionNo = $routeParams && $routeParams.questionNo ? $routeParams.questionNo : 1;

// TODO		    $scope.questions = questions;

		  $scope.selectAnswer = function (question, choice) {
		    question.selected = choice;
		  };

		  $scope.viewResults = function () {
		    $resultsService.setResults($scope.questions);
		    $location.path( "/results" );
		  }
	*/
});