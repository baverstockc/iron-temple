angular.module("ironTemple").controller("routinesController", function($scope, $location, userService) {
	$scope.username = userService.getCurrentUser();	
	$scope.routines = userService.getUserRoutines();
	$scope.selectedRoutine = userService.getRoutine();
	$scope.currentExercise = 1; 
	$scope.currentSet = 1;
	$scope.workoutComplete = false; 

	$scope.workout = function(routine) {
		userService.selectRoutine(routine);
		$location.path("/Workout");
	};

	$scope.nextSet = function() {
		var totalExercises = $scope.selectedRoutine.Routine.Exercises.length;
		var currentExercise = $scope.selectedRoutine.Routine.Exercises[$scope.currentExercise];
		if ($scope.currentSet < currentExercise.Sets.length){
			$scope.currentSet++;
		}
		else {
			if($scope.currentExercise === totalExercises){
				$scope.workoutComplete = true;
			}
			else {
				$scope.currentExercise++;
				$scope.currentSet = 1;
			}
		}
	}


});