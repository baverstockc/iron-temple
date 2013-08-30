angular.module("ironTemple", []);

angular.module("ironTemple").config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "iron-temple/templates/homepage.html",
		controller: "homepageController"
	});

	$routeProvider.otherwise({ redirectTo : "/homepage" });
});