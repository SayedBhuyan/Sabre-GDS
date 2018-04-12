<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Sabre API</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
</head>
<body>
	

	<div class="container">
		<div class="form">
			<form action="#" id="gf">
				<select name="trip">
					<option value="1">RoundTrip</option>
					<option value="2">One Way</option>
					<option value="3">Multi-City</option>
				</select>
				<div class="form-group">
					<input type="text" class="form-control" name="from" placeholder="Flying From">
				</div>
				<div class="form-group">
					<input type="text" class="form-control" name="to" placeholder="Flying To">
				</div>
				<div class="form-group">
					<input type="date" class="form-control" name="depDate" placeholder="Departuredate">
				</div>
				<button type="button" class="btn btn-sm" id="submit">Look Up</button>
			</form>
		</div>
	</div>
	

	
	

<script
  src="http://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>

<script src="scripts.js"></script>
</body>
</html>