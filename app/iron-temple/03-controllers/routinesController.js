angular.module("ironTemple").controller("routinesController", function($scope, $location, userService) {
	$scope.username = userService.getCurrentUser();	
	$scope.routines = userService.getUserRoutines();
	$scope.selectedRoutine = userService.getRoutine();

	$scope.workout = function(routine) {
		userService.selectRoutine(routine);
		$location.path("/Workout");
	};


});