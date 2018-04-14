$.ajaxSetup({
	headers: {
		"Authorization": "Bearer " + "T1RLAQL9klzugnIJN1aMM22F5RjYGERQiBDQ+wZndGAG1/ibl6ohBWLLAADAS6/K7LO2LJhHnyF0RHmkeodDckgEicBqeTc+lSYdn/6/j0kwp3ZB1kcndjMjwwsJVlmg1MmL/iII/ih6PBkJ5BzHiqjNB6/q034V01zM0yneNjEtS59OPDNkxDMC5vdK7IrWX3PIDtUgDZ4R5t6ZBAARLypvzI8K0yjfobS5URmjPy505LqqW+cr6iZjniDBZXLyUk/0tSl7HgUJe6YShtYPUcrJt5m6Xxcw5tTc7zV4wr3Xhopmhm9MoWehon5r",
		"X-Originating-Ip": "71.57.132.86"
	},
	crossDomain: true
});





// function sabreFlightsTo(data) {
// 	data = tojson(data);
// 	var destination = data.to;
// 	var pointofsalecountry = data.from
// 	console.log(destination);
// 	console.log(pointofsalecountry);
// 	$.ajax({
// 		url: "https://api.test.sabre.com/v1/shop/flights/cheapest/fares/"+destination+"?pointofsalecountry="+pointofsalecountry,
// 		success: function(data) {
// 			console.log(data);
// 		}
// 	});
// }

var app = new Vue({
  el: '#app',
  data: {
  	FareInfos: [],
  	AirlineCodes: [],
    AirlineInfo: [],
    loading: false
  },
  methods: {
  	FlightsTo: function(data) {
		data = tojson(data);
		var destination = data.to;
		var pointofsalecountry = data.from
		
		$.ajax({
			url: "https://api.test.sabre.com/v1/shop/flights/cheapest/fares/"+destination+"?pointofsalecountry="+pointofsalecountry,
			success: function(data) {
				app.FareInfos = data.FareInfo;
			},
			beforeSend: function() {
				app.loading = true;
			},
			complete: function() {
				app.loading = false;
			}
		});
  	},
  	AirlineLookup: function() {
		// Airline Lookup
			$.ajax({
				url: "https://api.test.sabre.com/v1/lists/utilities/airlines",
				success: function(data) {
					app.AirlineInfo = data.AirlineInfo;
				},
				beforeSend: function() {
					app.loading = true;
				},
				complete: function() {
					app.loading = false;
				},

			});
  	}
  }
});

$('#FlightsTo').on('show.bs.modal', function (event) {
	var data = $("#gf").serialize();
	app.FlightsTo(data);
});

function tojson(search) {
	return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
}
