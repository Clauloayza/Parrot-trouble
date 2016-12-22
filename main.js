<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="main.css">
	<title>Monkey</title>
</head>
<body>
<header>
    <div>
       <center>
           <img src="https://mirandomasalladelhorizonte.files.wordpress.com/2015/06/happy-birthday-cakes-tumblr-4.gif" class="img-responsive" alt="">
       </center>
    </div>
</header>
<section>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<h1>Monkey Trouble</h1>
				<p>Completa el formulario:</p>
				<hr>
			</div>
		</div>
		<div class="row">
			<div class="col-md-5 col-md-offset-2">
				<div class="form-group">
					<label for="bSmile">El Mono A esta sonriendo?</label>
					<select class="form-control" id="aSmile">
						<option value="1">Si</option>
						<option value="2">No</option>
					</select>
				</div>
				<div class="form-group">
					<label for="aSmile">El Mono B esta sonriendo?</label>
					<select class="form-control" id="bSmile">
						<option value="1">Si</option>
						<option value="2">No</option>
					</select>
				</div>
				<center>
				    <button onclick="calcular()" class="btn btn-primary">Calcular</button>    
				</center>
				
			</div>
			<div class="col-md-3 text-center">
				<h4 class="text-info">ENTONCES</h4>
				<div id="salida" style="font-size:50px;" class="text-center">-</div>
				<h4 class="text-info">existe problemas</h4>
	        </div>
	   </div>
    </div>
</section>
<footer>
    <center>
        <a>clou7loymed@gmail.com</a>
    </center>
</footer>
</body>
<script src="main.js"></script>
</html>