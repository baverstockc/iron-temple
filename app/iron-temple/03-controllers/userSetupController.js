angular.module("ironTemple").controller("userSetupController", function($scope, $location, userService){
	$scope.username = userService.getCurrentUser();
	$scope.routine = [];
	$scope.exerciseName = "";
	$scope.exerciseQuantity;
	$scope.exerciseUnit = "";

	$scope.newRoutine = function() {
		$location.path("/NewRoutine");
	};

	$scope.addExercise = function() {
		var newExercise = {
			Name: $scope.exerciseName,
			Quantity: $scope.exerciseQuantity,
			Unit: $scope.exerciseUnit,
			Sets: $scope.exerciseSets
		};
		$scope.routine.push(newExercise);
		resetExercise();
	};

	$scope.showSets = function() {
		if ($scope.exerciseUnit === "Reps") { 
			return true;
		}
		else {
			return false;
		}
	}

	function resetExercise() {
		$scope.exerciseName = "";
		$scope.exerciseQuantity = 0;
		$scope.exerciseUnit = "";
		$scope.exerciseSets = 0;
	}
});