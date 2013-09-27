angular.module("ironTemple").factory("userWeightTrackerService", function() {
	var weightLog = [
		{
			userId: "F4E1ED37-F4B5-46BE-82F4-60DC1A1BF0DE",
			entryDate: "2013-06-10",
			weight: 80, 
		},
		{
			userId: "F4E1ED37-F4B5-46BE-82F4-60DC1A1BF0DE",
			entryDate: "2013-06-20",
			weight: 78, 
		},
		{
			userId: "F4E1ED37-F4B5-46BE-82F4-60DC1A1BF0DE",
			entryDate: "2013-07-01",
			weight: 76, 
		},
		{
			userId: "F4E1ED37-F4B5-46BE-82F4-60DC1A1BF0DE",
			entryDate: "2013-07-21",
			weight: 74, 
		},
		{
			userId: "F4E1ED37-F4B5-46BE-82F4-60DC1A1BF0DE",
			entryDate: "2013-08-07",
			weight: 70, 
		},
		{
			userId: "G5E1ED37-F4B5-46BE-82F4-60DC1A1BF0DE",
			entryDate: "2013-07-28",
			weight: 100, 
		}
	];

	function getTodaysDate() {
		var today = new Date().toJSON().slice(0,10);
		return today;
	}

	function calculateGraphOptions(heaviest, lightest, step) {
		var options = {
			scaleOverlay : false,
		
			//Boolean - If we want to override with a hard coded scale
			scaleOverride : true,
			
			//** Required if scaleOverride is true **
			//Number - The number of steps in a hard coded scale
			scaleSteps : (heaviest - lightest) / step,
			//Number - The value jump in the hard coded scale
			scaleStepWidth : step,
			//Number - The scale starting value
			scaleStartValue : lightest,

			//String - Colour of the scale line	
			scaleLineColor : "rgba(0,0,0,.1)",
			
			//Number - Pixel width of the scale line	
			scaleLineWidth : 1,

			//Boolean - Whether to show labels on the scale	
			scaleShowLabels : true,
			
			//Interpolated JS string - can access value
			scaleLabel : "<%=value%>",
			
			//String - Scale label font declaration for the scale label
			scaleFontFamily : "'Arial'",
			
			//Number - Scale label font size in pixels	
			scaleFontSize : 12,
			
			//String - Scale label font weight style	
			scaleFontStyle : "normal",
			
			//String - Scale label font colour	
			scaleFontColor : "#666",	
			
			///Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,
			
			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",
			
			//Number - Width of the grid lines
			scaleGridLineWidth : 1,	
			
			//Boolean - Whether the line is curved between points
			bezierCurve : true,
			
			//Boolean - Whether to show a dot for each point
			pointDot : true,
			
			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,
			
			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,
			
			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,
			
			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,
			
			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,
			
			//Boolean - Whether to animate the chart
			animation : true,

			//Number - Number of animation steps
			animationSteps : 60,
			
			//String - Animation easing effect
			animationEasing : "easeOutQuart",

			//Function - Fires when the animation is complete
			onAnimationComplete : null
		};

		return options;
	}

	return {
		getUserWeightData : function(userId) {
			var dataToReturn = [];
			for (var entry in weightLog){
				if (weightLog[entry].userId == userId){
					dataToReturn.push(weightLog[entry]);
				}
			}

			return dataToReturn;
		},
		addUserWeightEntry: function(userId, weight) {
			var newEntry = {
				userId: userId,
				entryDate: getTodaysDate(),
				weight: weight
			};
			weightLog.push(newEntry);
		},
		getUserWeightForGraph: function(userId) {
			var dataToReturn = {
					labels: [],
					datasets: [
						{
							fillColor : "rgba(220,220,220,0.5)",
							strokeColor : "rgba(220,220,220,1)",
							pointColor : "rgba(220,220,220,1)",
							pointStrokeColor : "#fff",
							data : []
						}
					],
					heaviest: 0,
					lightest: 1000,
					step: 2,
					options : {}
			};

			for (var entry in weightLog){
				if (weightLog[entry].userId == userId){
					dataToReturn.labels.push(weightLog[entry].entryDate);
					dataToReturn.datasets[0].data.push(weightLog[entry].weight);
					if (weightLog[entry].weight > dataToReturn.heaviest){
						dataToReturn.heaviest = weightLog[entry].weight;
					}
					if (weightLog[entry].weight < dataToReturn.lightest) {
						dataToReturn.lightest = weightLog[entry].weight;
					}
				}
			}

			if (dataToReturn.heaviest - dataToReturn.lightest > 20) {
				dataToReturn.step = 5;
			}
			//Add more step values here

			dataToReturn.options = calculateGraphOptions(dataToReturn.heaviest, dataToReturn.lightest, dataToReturn.step);

			return dataToReturn;
		}
	}
}); 