function readTextFile(file){
	var lines=""
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
                lines = allText.split('\n');               
            }
        }
    }
    rawFile.send(null);
	
	
	
    var output = document.getElementById('output');
	
	for(var line = 0; line < lines.length; line++){
			 
        if(!document.getElementById('timedrpact'+line)){
            var ele = document.createElement("li");
            ele.innerHTML="<i class='fa-li fa fa-spinner fa-spin'></i> "+lines[line];
            output.appendChild(ele);
            
        }
    }
};