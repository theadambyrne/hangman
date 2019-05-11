let wordLen = 5
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		alert(this.responseText());
	}
};
xhttp.open("GET", "wordsapi_sample.json?random=true", true);
xhttp.send();