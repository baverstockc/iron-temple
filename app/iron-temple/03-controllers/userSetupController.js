angular.module("ironTemple").controller("userSetupController", function($scope, $location, userService){
	$scope.username = userService.getCurrentUser();
	$scope.routine = {
		Name: "",
		Exercises: []
	};
	$scope.exerciseName = "";
	$scope.exerciseQuantity;
	$scope.exerciseUnit = "Select a unit";
	$scope.routineName= "";

	$scope.addExercise = function() {
		var newExercise = {
			Name: $scope.exerciseName,
			Quantity: $scope.exerciseQuantity,
			Unit: $scope.exerciseUnit,
			Sets: $scope.exerciseSets
		};
		$scope.routine.Name = $scope.routineName;
		$scope.routine.Exercises.push(newExercise);
		resetExercise();
	};

	$scope.exerciseValid = function() {
		//add validation
	};

	$scope.saveRoutine = function() {
		userService.addUserRoutine($scope.routine);
		$location.path("/");
	};

	function resetExercise() {
		$scope.exerciseName = "";
		$scope.exerciseQuantity = 0;
		$scope.exerciseUnit = "Select a unit";
		$scope.exerciseSets = 0;
	}
});