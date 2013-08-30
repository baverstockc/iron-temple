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
	})

	$routeProvider.otherwise({ redirectTo : "/homepage" });
});