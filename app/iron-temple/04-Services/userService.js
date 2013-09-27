angular.module("ironTemple").factory("userService", function() {
	var currentUser = "Christian";
	var userRoutines = [
		{
			UserName: "Christian",
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

	return {
		getCurrentUser : function() {
			return currentUser;
		},

		addUserRoutine : function(routine) {
			var newRoutine = {
				UserName: currentUser,
				Routine: routine
			};
			userRoutines.push(newRoutine);
		},

		getUserRoutines : function() {
			var routines = [];
			for (i=0; i<userRoutines.length; i++) {
				if (userRoutines[i].UserName === currentUser) {
					routines.push(userRoutines[i].Routine);
				}
			}

			return routines;
		},

		getRoutine: function() {
			return selectedRoutine;
		},

		selectRoutine : function(position) {
			selectedRoutine = userRoutines[position];
		}

	};
});