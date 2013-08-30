angular.module("ironTemple").controller("routinesController", function($scope, userService) {
	$scope.username = userService.getCurrentUser();	
	$scope.routines = userService.getUserRoutines();
});