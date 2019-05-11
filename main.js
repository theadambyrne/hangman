function RandomWord(wordLen) {
    /*
        additional length parameter: number in
        the range of 3-20
    */
	var wordLen = wordLen ? ("?len=" + wordLen) : "";
	var requestStr = "http://setgetgo.com/randomword/get.php" + wordLen;
	$.ajax({
		type: "GET",
		url: requestStr,
		dataType: "jsonp",
		jsonpCallback: 'RandomWordComplete',
	});
}

function RandomWordComplete(data) {
	alert(data)
}