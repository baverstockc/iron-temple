angular.module("ironTemple").factory("userService", function() {
	var currentUser = "Christian";
	var userRoutines = [];

	return {
		getCurrentUser : function() {
			return currentUser;
		},

		addUserRoutine : function(routine) {
			var newRoutine = {
				Name: currentUser,
				Routine: routine
			};
			userRoutines.push(newRoutine);
		},

		getUserRoutines : function() {
			var routines = [];
			for (i=0; i<userRoutines.length; i++) {
				if (userRoutines[i].Name = "currentUser") {
					routines.push(userRoutines[i].Routine);
				}
			}

			return routines;
		},

	};
});