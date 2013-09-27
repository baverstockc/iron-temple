angular.module("ironTemple").controller("routinesController", function($scope, $location, userService) {
	$scope.user = userService.getCurrentUser();	
	$scope.routines = userService.getUserRoutines();
	$scope.selectedRoutine = userService.getRoutine();
	$scope.currentExercise = 0; 
	$scope.currentSet = 0;
	$scope.workoutComplete = false;
	$scope.completedExercises = [];
	$scope.setWeight = 12; 

	$scope.workout = function(routine) {
		userService.selectRoutine(routine);
		$location.path("/Workout");
	};

	$scope.nextSet = function() {
		addCompletedExercise();
		var totalExercises = $scope.selectedRoutine.Routine.Exercises.length-1;
		var currentExercise = $scope.selectedRoutine.Routine.Exercises[$scope.currentExercise];
		if ($scope.currentSet < currentExercise.Sets.length-1){
			$scope.currentSet++;
			$scope.setWeight = 0;
		}
		else {
			if($scope.currentExercise === totalExercises){
				$scope.workoutComplete = true;
				userService.completeUserRoutine($scope.completedExercises);
			}
			else {
				$scope.currentExercise++;
				$scope.currentSet = 0;
				$scope.setWeight = 0;
			}
		}
	}

	function addCompletedExercise() {
		var exerciseToAdd = {
			Exercise: $scope.currentExercise,
			Set: $scope.currentSet,
			Weight: $scope.setWeight
		};

		$scope.completedExercises.push(exerciseToAdd);
	}


});