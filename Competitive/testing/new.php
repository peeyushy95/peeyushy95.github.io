<html>
<body>
<?php 
	$filename = "input.txt"; 
	$fp = fopen ($filename, "r"); 
	if ($fp) {
		$text = fread ($fp, filesize ($filename));
		fclose ($fp); 
		echo $text;
		// prints text to the screen } else { echo ("File is not readable"); 
	} 
?>

<body>
</html>