$.ajaxSetup({
	headers: {
		"Authorization": "Bearer " + "T1RLAQKCMNs02EnPWWr8T8RLLf7erYr64hBZWMn5tH5qdeTRz+dtTIv+AADAgR21FhEgEMU8Kj+LWV6kRk32hoH7Bx2Y7v29rMWcegoskw8fwWVRECmxqxG6F1J0/JCyUzYc7l8m8MacTLpikiMOhi71hLb+cBxehcgWKEcLmY09TcxPzh5vKWTIWw14SqeKIrflhFJq9ZU3RKtcUx924hE/sdfMgE7YoykUK4dxTexOVdVtyYTEg2lLi9DHCzu9Gnwl6K8m6JXN6Sj7seIya2KyF0lprtQp7Z6qbPfDPc8y09XQE2QUXRELcCOI",
		"X-Originating-Ip": "71.57.132.86"
	}
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
    AirlineInfo: []
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
			}
		});
  	},
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
});

$('#FlightsTo').on('show.bs.modal', function (event) {
	var data = $("#gf").serialize();
	app.FlightsTo(data);
});

function tojson(search) {
	return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
}
