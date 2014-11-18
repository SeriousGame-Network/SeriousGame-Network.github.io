angular.module("sgnApp.answerController", [])
.controller("AnswerController", function ($scope, $http, $routeParams, $location, $resultsService) {

	  $scope.results = $resultsService.getResults();
	  $('#results').modal();


	  $scope.closeModal = function() {
	    $('#results').modal('hide');
	    $location.path('/questions/'+($scope.results.length));
	  }

})