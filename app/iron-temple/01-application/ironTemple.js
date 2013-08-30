angular.module("ironTemple", []);

angular.module("ironTemple").config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "iron-temple/templates/homepage.html",
		controller: "homepageController"
	});

	$routeProvider.when("/UserSetup", {
		templateUrl: "iron-temple/templates/userSetup.html",
		controller: "userSetupController"
	});

	$routeProvider.when("/NewRoutine", {
		templateUrl: "iron-temple/templates/newRoutine.html",
		controller: "userSetupController"
	});

	$routeProvider.when("/Routines", {
		templateUrl: "iron-temple/templates/userRoutines.html",
		controller: "routinesController"
	});

	$routeProvider.when("/Workout", {
		templateUrl: "iron-temple/templates/workout.html",
		controller: "routinesController"
	});	

	$routeProvider.otherwise({ redirectTo : "/homepage" });
});