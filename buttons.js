let xhr = new XMLHttpRequest();

function add_field(address, lat, lon, init) {
	//var txt = document.getElementById(friends_name).value;
	xhr.open("Post", "https://reqbin.com/echo/post/json");
	xhr.setRequestHeader("Accept", "application/json");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(xhr.status);
			console.log(xhr.responseText);
	}};
		
	xhr.send(address); 
	xhr.send(lat);
	xhr.send(lon);
	xhr.send(init);
}

function get_friend() {
}