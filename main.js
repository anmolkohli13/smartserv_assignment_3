const pwd = document.getElementById("password");
const username = document.getElementById("username");

let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (!username.value.match(emailregex)) {
	alert("Enter a valid email address");
}

let pwdregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!$ %^&*-])}$/;

if (!pwd.value.match(pwdregex)) {
	alert("enter a valid password");
}
