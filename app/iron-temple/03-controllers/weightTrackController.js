angular.module("ironTemple").controller("weightTrackController", function($scope, $location, userService, userWeightTrackerService ){
	$scope.user = userService.getCurrentUser();
	$scope.historicGraphData = userWeightTrackerService.getUserWeightForGraph($scope.user.Id);

	$scope.weightUnit = function() {
		if ($scope.user.Measurements == "M") {
			return "Kgs";
		}
		else {
			return "lbs";
		}
	};

	$scope.submitWeight = function() {
		userWeightTrackerService.addUserWeightEntry($scope.user.Id, $scope.todaysWeight);
		$scope.historicGraphData = userWeightTrackerService.getUserWeightForGraph($scope.user.Id);
		new Chart(ctx).Line($scope.historicGraphData, $scope.historicGraphData.options);
	};

	$scope.distanceToGoal = function() {
		var distance = $scope.historicGraphData.lightest -$scope.user.weightGoal;
		if(distance > 0){
			return "You a currently " + distance + $scope.weightUnit() + " away from your target weight."
		}
		else if (distance == 0) {
			return "Well done you've hit your target weight!";
		}
		else {
			return "You're now " + Math.abs(distance) + $scope.weightUnit() + " below your target weight, perhaps you should set a new target.";
		}
	}

	var ctx = document.getElementById("myChart").getContext("2d");
	new Chart(ctx).Line($scope.historicGraphData, $scope.historicGraphData.options);

});