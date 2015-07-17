<head>
<link rel="stylesheet" href="css/font-awesome.min.css">
</head><body style="
    margin-left: 200px;
">

<i class="fa fa-camera-retro fa-5x"></i> fa-5x

<ul class="fa-ul">
  <li><i class="fa-li fa fa-spinner fa-spin "></i>as bullets</li>
</ul>

<ul class="fa-ul">
<?php

	$f = fopen("input.txt", "r");
	
	// Read line by line until end of file
	

	while(!feof($f)) { 
?>
	<li><i class="fa-li fa fa-spinner fa-spin "></i><?php echo fgets($f) . "<br />"; ?></li>
	
	<?php	 
	}
	?>
	<?php 
	fclose($f);

	?>
</ul>
<body>
