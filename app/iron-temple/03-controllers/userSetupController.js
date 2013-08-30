angular.module("ironTemple").controller("userSetupController", function($scope, $location, userService){
	$scope.username = userService.getCurrentUser();

	$scope.newRoutine = function() {
		$location.path("/NewRoutine");
	};
});