angular.module("ironTemple").factory("userService", function($resource, serviceUris) {
	var currentUser = {
		Id: "F4E1ED37-F4B5-46BE-82F4-60DC1A1BF0DE",
		Name: "Christian",
		Measurements: "M",
		weightGoal: 65
	};
	var userRoutines = [
		{
			UserId: "F4E1ED37-F4B5-46BE-82F4-60DC1A1BF0DE",
			Routine: 
				{
					Id: "A2F19A01-4FE5-40F2-9985-143F3A0D42AA",
					Name: "Squat and Bench 3x5",
					Exercises: [
						{
							Name: "Squat",
							Sets: [
								{
									Quantity: 5,
									Unit: "Reps"
								},
								{
									Quantity: 5,
									Unit: "Reps"
								},
								{
									Quantity: 5,
									Unit: "Reps"
								}
							]
						},
						{
							Name: "Bench Press",
							Sets: [
								{
									Quantity: 5,
									Unit: "Reps"
								},
								{
									Quantity: 5,
									Unit: "Reps"
								},
								{
									Quantity: 5,
									Unit: "Reps"
								}
							]
						}
					]
				}
		}
	];
	var selectedRoutine = {};

	var completedExerciseLog = [];

	return {
		getCurrentUser : function() {
			return currentUser;
		},

		addUserRoutine : function(routine) {
			var newRoutine = {
				UserId: currentUser.Id,
				Routine: routine
			};
			userRoutines.push(newRoutine);
		},

		getUserRoutines : function() {
			var routines = [];
			// for (i=0; i<userRoutines.length; i++) {
			// 	if (userRoutines[i].UserId === currentUser.Id) {
			// 		routines.push(userRoutines[i].Routine);
			// 	}
			// }

			var userRoutinesResource = $resource(serviceUris.userRoutinesUri);
			userRoutinesResource.query();

			return routines;
		},

		getRoutine: function() {
			return selectedRoutine;
		},

		selectRoutine : function(position) {
			selectedRoutine = userRoutines[position];
		},

		completeUserRoutine : function(completeExercises) {
			var completed = {
				UserId: currentUser.Id,
				RoutineId: selectedRoutine.Routine.Id,
				CompleteDate: new Date(),
				Exercises: completeExercises
			};

			completedExerciseLog.push(completed);
		}

	};
});