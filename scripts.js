$.ajaxSetup({
	headers: {
		"Authorization": "Bearer " + "T1RLAQLs/lXywKQuY9bLOgnMsojnz2QcYhAM+RtmnWUM6XeEpdVC49NzAADA63XXSavD3wTM1tbPvzx8nJR6Ka15UPMTXjBevn9mhxLKDrBXubwRR/3iHsQkDxeoXykkfuD36eH/VkgVKZm9s74n7hlyNK+rurr8ZnI9ajUkwEtXQAk7JObOXwf38K6FIPHhjik0o/Ff3I4oNWCknb1IRi9UneCNnru0US2fsfWk8cQCWVJmSmat4bezaAD/B4/4m9SGHyroEFch0hiAj/Xmm5eNnqeYtVwmLiGu463TD+JmRdDuo2YYpMChxqRO",
		"X-Originating-Ip": "71.57.132.86"
	}
});

$("#submit").on("click", function(e) {
	
	var data = $("#gf").serialize();
	sabreFlightsTo(data);
	e.preventDefault();
});

function sabreFlightsTo(data) {
	data = tojson(data);
	var destination = data.to;
	var pointofsalecountry = data.from
	console.log(destination);
	console.log(pointofsalecountry);
	$.ajax({
		url: "https://api.test.sabre.com/v1/shop/flights/cheapest/fares/"+destination+"?pointofsalecountry="+pointofsalecountry,
		success: function(data) {
			console.log(data);
		}
	});
}

var app = new Vue({
  el: '#app',
  data: {
    AirlineInfo: []
  },
  methods: {
  	AirlineLookup: function() {
		// Airline Lookup
			$.ajax({
				url: "https://api.test.sabre.com/v1/lists/utilities/airlines",
				success: function(data) {
					app.AirlineInfo = data.AirlineInfo;
				}
			});
  	}
  }
})

function tojson(search) {
	return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
}
