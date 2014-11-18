
angular.module("sqnApp.userDataService", [])
.service("userDataService", function () {

	var data = {
		currentUserName : "Ahmed Magri",
		currentUser : undefined,
		
		users : [
	     { // user 1
			 name : "Ahmed Magri",
			 photoURL : "images/am.png",
			 describeText : "Développeur",
			 
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
					    ],
		     friendNames : [ 
		                 "Ahmed Magri", // self for demo...
		                 "Fabien Lequeurre", "Arnaud Nauwynck",
             ],
					    
			 pendingChallenges : 
				 [
			     {
			    	 name : "challenge Java pour expert",
			    	 sendFrom : "Arnaud Nauwynck",
			    	 sendTo : "Ahmed Magri",
			     },
			     {
			    	 name : "Expert Finance produit Structurés de taux",
			    	 sendFrom : "Fabien Lequeurre",
			    	 sendTo : "Ahmed Magri",
			     }
				 ],
	
		     answeredQuizz : []
	     }, 
	     { // user 2
			 name : "Fabien Lequeurre",
			 photoURL : "images/fl.png",
			 describeText : "Développeur",
			 
			 levels : [
					        { 
					        	tags : "dev java langage",
					        	level : 1
					        },
					        { 
					        	tags : "dev .net langage",
					        	level : 5
					        },
					        { 
					        	tags : "appli neo infra",
					        	level : 1
					        },
					        { 
					        	tags : "appli neo support",
					        	level : 1
					        },
					    ],
			 
			 friendNames : [ "Ahmed Magri", "Arnaud Nauwynck" ],

			 pendingChallenges : 
				 [
			     {
			    	 name : "challenge Java pour expert",
			    	 sendFrom : "Arnaud Nauwynck",
			    	 sendTo : "Fabien Lequeurre",
			     },
			     {
			    	 name : "Expert Finance produit Structurés de taux",
			    	 sendFrom : "Ahmed Magri",
			    	 sendTo : "Fabien Lequeurre",
			     }
				 ],
	
		     answeredQuizz : []
	    	 
	     },
	     { // user 2
			 name : "Arnaud Nauwynck",
			 photoURL : "images/an.png",
			 describeText : "Développeur",
			 
			 levels : [
					        { 
					        	tags : "dev java langage",
					        	level : 5
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
			 ],
			 
		     friendNames : [ "Ahmed Magri", "Fabien Lequeurre", "Arnaud Nauwynck" ],
			 pendingChallenges : 
				 [
			     {
			    	 name : "challenge Java pour expert",
			    	 sendFrom : "Ahmed Magri",
			    	 sendTo : "Arnaud Nauwynck",
			     },
			     {
			    	 name : "Expert Finance produit Structurés de taux",
			    	 sendFrom : "Fabien Lequeurre",
			    	 sendTo : "Arnaud Nauwynck",
			     }
				 ],
	
		     answeredQuizz : []
	    	 
	     }

		]
	  };

		return {

			  getData : function() {
				  return data;
			  },
			  
			  getCurrentUser : function() {
				  if (data.currentUser === undefined) {
					  data.currentUser = this.getUserData(data.currentUserName);
				  }
				  return data.currentUser;
			  },
			  
			  getUserData : function(name) {
				  var res = undefined;
				  for(i = 0; i < data.users.length; i++) {
					  if (data.users[i].name === name) {
						  res = data.users[i];
						  break;
					  }
				  }
				  return res;
			  },
			  
			  getFriendUsers : function(user) {
				var res = [];
				for (i = 0; i< user.friendNames.length; i++) {
					var u = this.getUserData(user.friendNames[i]);
					if (u) {
						res.push(u);
					}
				}
				return res;
			  } ,
			  
			  sendChallenge : function(challenge) {
				  var user = this.getUserData(challenge.sendTo);
				  if (user != undefined) {
					  user.pendingChallenges.push(challenge);
				  }
				  // ?? writeDataToLocalStorage();
			  },
			  
			  writeDataToLocalStorage : function() {
				  console.log("writeStorage");
				  window.localStorage["sgn-userdata"] = $scope.userData;
			  },

			  readDataFromLocalStorage : function() {
				  console.log("readDataFromLocalStorage");
				  $scope.userData = window.localStorage["sgn-userdata"];
			  }
		};
});
