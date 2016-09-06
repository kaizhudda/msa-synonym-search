function loadDoc(form) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("placeData").innerHTML = "";
        var dataParse = xhttp.responseText;
        var obj = JSON.parse(dataParse)
        for (var i = 0; i < 5; i++) {
            document.getElementById("placeData").innerHTML += obj.noun.syn[i] + '<br />';
        }
      
      console.log(obj)
    }
  };
  var x = document.getElementById("myForm").value;
  xhttp.open("GET", "http://words.bighugelabs.com/api/2/1b1981d0d07796d1f0f57b643e1cee62/" + x + "/json");
  xhttp.send();
}