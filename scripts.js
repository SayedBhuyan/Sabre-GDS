$.ajaxSetup({
	headers: {
		"Authorization": "Bearer T1RLAQLfXtLZSOj7tFCNpSYdmcrTFLiqXhDKM5bNUJwAqlWQiL5/Qr2cAADAKYNq3WBXlpIhUaXeR4U5ZtFPi5MB1pSRtY/6inv445itGiQOeZURIrt+ejXVw+CBr2qnhveYCzr+g4lOR7oat5/cnfC3dHlEulfKLY2YFmBHeq++VW8/orKPzHBntot6uOD25QH3VELi2MgWCGfdDPUoLravielehpeNbRMwcwB2V5OszSXTvrjQ54cRA+mUYDPdPKunaJhF9cylKo2/bxwlQpKEQIWYPU+/1gUfdz2eBs9TZMxkRUVsMDtHtZn6",
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



function tojson(search) {
	return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
}
