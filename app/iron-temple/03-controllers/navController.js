angular.module("ironTemple").controller("navController", function($scope, $location) {
	$scope.userSetup = function() {
		$location.path("/UserSetup")
	};
});