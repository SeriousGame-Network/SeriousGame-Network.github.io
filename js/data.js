angular.module("sqnApp.dataService", [])
.service("sgnDataService", function () {
	  var data = {

		questions : [
		        {
		        	name : "java accès modificateurs",
		        	tags : "dev java langage",
		        	level : 1,
		        	text : "Quels sont les modificateurs d'accès en Java ?",
		        	answers : 
		        		[
		        	    {
		        	    	text : "public, private",
		        	    	score : 0.0
		        	    },
		        	    {
		        	    	text : "public, private, protected",
		        	    	score : 0.0
		        	    },
		        	    {
		        	    	text : "public, private, protected, [default]",
		        	    	score : 1.0	
		        	    },
		        	    {
		        	    	text : "public, private, final",
		        	    	score : 0.0
		        	    },
		        	    {
		        	    	text : "public, private, friend",
		        	    	score : 0.0
		        	    }
		        	    ]
		        },
		        {
		        	name : "",
		        	tags : "événement hackathon",
		        	level : 4,
		        	text : "Quel a été le nombre de pitchs Lundi matin ?",
		        	answers : 
		        		[
		        	    {
		        	    	text : "57",
		        	    	score : 1.0
		        	    },
		        	    {
		        	    	text : "Entre 100 à 200",
		        	    	score : 0.0
		        	    },
		        	    {
		        	    	text : "42",
		        	    	score : 0.0	
		        	    },
		        	    {
		        	    	text : "3.14",
		        	    	score : 0.0
		        	    },
		        	    {
		        	    	text : "Oups ! Euh, c'était quoi déjà ?",
		        	    	score : 0.0
		        	    }
		        	    ]
		        },
		        {
		        	name : "",
		        	tags : "événement hackathon",
		        	level : 3,
		        	text : "A partir de quel niveau sonore le pitch n'est-il plus audible ?",
		        	answers : 
		        		[
		        	    {
		        	    	text : "10 db",
		        	    	score : 0.0
		        	    },
		        	    {
		        	    	text : "50 db",
		        	    	score : 1.0
		        	    },
		        	    {
		        	    	text : "100 db",
		        	    	score : 0.0	
		        	    },
		        	    {
		        	    	text : "1000 db",
		        	    	score : 0.0
		        	    },
		        	    {
		        	    	text : "Je n'ai rien entendu",
		        	    	score : 0.0
		        	    }
		        	    ]
		        },
		        {
		        	name : "",
		        	tags : "événement hackathon",
		        	level : 2,
		        	text : "Combien de temps avez-vous mis pour composer votre équipe ?",
		        	answers : 
		        		[
		        	    {
		        	    	text : "Mon équipe était déjà constituée avant !",
		        	    	score : 1.0
		        	    },
		        	    {
		        	    	text : "J'ai fait un super speech, on a du refuser du monde !",
		        	    	score : 1.0
		        	    },
		        	    {
		        	    	text : "Je suis un éternel incompris, je n'ai pas d'équipe...",
		        	    	score : 0.0	
		        	    },
		        	    {
		        	    	text : "Moi je recherche encore un développeur...",
		        	    	score : 0.0
		        	    },
		        	    {
		        	    	text : "Je n'ai pas d'équipe, je suis là en mission top secrète !",
		        	    	score : 0.0
		        	    }
		        	    ]
		        }
		    ],
		    level : {
		    	java : 4,
		    	dotnet : 1,
		    	pnl : 5,
		    	support : 3,
		    	hackathon : 2
		    }
	  }; // var data

	  
	return {

	  getData : function() {
		  return data;
	  },
	  
	  writeDataToLocalStorage : function() {
		  console.log("writeStorage");
		  window.localStorage["sgn-data"] = data;
	  },

	  readDataFromLocalStorage : function() {
		  console.log("readDataFromLocalStorage");
		  data = window.localStorage["sgn-data"];
	  }
	}; // return
});
