
console.log("loading user.js");

angular.module("sqnApp.userDataService", [])
.service("userDataService", function ($scope, $localStorage) {

	$scope.userData = {

		levels : [
		        { 
		        	tags : "dev java langage",
		        	level : 1
		        },
		        { 
		        	tags : "dev .net langage",
		        	level : 3
		        },
		        { 
		        	tags : "appli neo infra",
		        	level : 1
		        },
		        { 
		        	tags : "appli neo support",
		        	level : 1
		        },
		    ] 
	  };

	  $scope.writeDataToLocalStorage = function() {
		  console.log("writeStorage");
		  window.localStorage["sgn-userdata"] = $scope.userData;
	  };

	  $scope.readDataFromLocalStorage = function() {
		  console.log("readDataFromLocalStorage");
		  $scope.userData = window.localStorage["sgn-userdata"];
	  };

});
