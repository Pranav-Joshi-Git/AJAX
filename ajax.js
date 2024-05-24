console.log("Ajax.js loaded");

let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
	console.log("You have clicked the fetchBtn");
	//? Instantiate an xhr object
	const xhr = new XMLHttpRequest();

	//? Open the object
	//* GET requests
	// xhr.open("GET", "data.txt", true);
	// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

	//* POST requests
	xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);
	// xhr.open("POST", "data.txt", true);

	// xhr.getResponseHeader("Content-type", "application/x-www-form-urlencoded");  // this is used to send data via url
	// xhr.getResponseHeader("Content-type", "application/json");

	//? What to do on progress (optional)
	xhr.onprogress = function () {
		console.log("On progress");
	};

	//? What to do when response is ready
	xhr.onreadystatechange = function () {
	    console.log("Ready state is ", xhr.readyState);
	}
	/*
    !This is the old way of doing things and new way is onload
    ?there are 5 ready states:
        *0: request not initialized
        *1: server connection established
        *2: request received
        *3: processing request
        *4: request finished and response is ready
    */

	//? What to do when response is ready
	xhr.onload = function () {
		if (this.status === 200) {
			console.log(this.responseText);
		} else {
			console.error("Some error occured");
		}
	};

	//? Send the request

	// params = "name=Himanshu&salary=123&age=23";//?format for sending data via url

	params = `{"name":"Himanshu", "salary":"123", "age":"23"}`; //?format for sending data via json

	xhr.send(params);

	// xhr.send(); // for get requests
	console.log("We are done");
	//?This will be printed first because the request is asynchronous which we have set to true in the open method
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
	console.log("You have clicked the popBtn");
	//? Instantiate an xhr object
	const xhr = new XMLHttpRequest();

	//? Open the object

	xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);

	//? What to do when response is ready
	xhr.onload = function () {
		if (this.status === 200) {
			let obj = JSON.parse(this.responseText);
			console.log(obj); //? this is an array of objects
			let list = document.getElementById("list");
			str = "";
			for (key in obj) {
				str += `<li>${obj[key].title}</li>`;
			}
			list.innerHTML = str;
		} else {
			console.error("Some error occured");
		}
	};

	// Send the request
	xhr.send();
}

