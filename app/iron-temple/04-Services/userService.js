angular.module("ironTemple").factory("userService", function() {
	var currentUser = "Christian";

	return {
		getCurrentUser : function() {
			return currentUser;
		},
	};
});