function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                text = allText.replace(/\r?\n/g, '<br />');
                document.getElementById('gg').innerHTML= text;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}