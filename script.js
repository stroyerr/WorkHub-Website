// JavaScript Document

var users = [
	"angus",
	"michael",
	"jack",
	"bryce",
	"hilary",
	"ethan",
	"inno"
]

var passwords = [
	"triangle",
	"rtt",
	"nightbird",
	"pickle",
	"inherit",
	"bj",
	"money",
	"tapp",
	"esh"
]


var commands = [
	"set_user",
	"help",
	"set_admin_mode",
	"alert",
	"list_users",
	"close"
]


function login(){
	var user = document.getElementById("userInput").value.toLowerCase();
	var pass = document.getElementById("passInput").value;
	var userIndex = users.indexOf(user);
	var passIndex = passwords.indexOf(pass);
	
	if (userIndex == passIndex-2 && userIndex > -1 && passIndex > -1 ){
		window.userSignedIn = user;
		window.passwordUser = pass;
		signedIn();
		document.getElementById("userDisplay").innerHTML="Signed in as "+userSignedIn;
	}else{
		document.getElementById("incorrect").style.display="inline-block";
	}
	
}

function signedIn(){
	
	document.getElementById("loggedIn").style.display="block";
	document.getElementById("loginPage").style.display="none";
	
}
			

function unB(){
	
	hide();
	document.getElementById('unB').style.display='block';
	
}

function unBo(){
	var no = document.getElementById("unBInput").value;
	alert(no);
	alert("https://sites.google.com/site/allunblockedgames"+no+"/");
	window.open("https://sites.google.com/site/allunblockedgames"+no+"/");
}

function hideUnB(){
	document.getElementById("unB").style.display="none";
}

function hide(){
	hideUnB();
	hideYouTube();
	hideMS();
	hideUnblock();
}

function openYoutubeSearch(){
	window.open('window.open("https://webcache.googleusercontent.com/search?q=cache:-8-SNBoj0kAJ:https://www.youtube.com/user/theopen+&cd=13&hl=en&ct=clnk&gl=au');
	window.open('https://www.google.com/search?q=open+youtube&rlz=1C5CHFA_enAU866AU866&oq=open+yo&aqs=chrome.0.69i59j69i57j0j69i60l3.995j1j9&sourceid=chrome&ie=UTF-8');
}

function youtube(){
	hide();
	document.getElementById("youtube").style.display="block";
}

function hideYouTube(){
	document.getElementById("youtube").style.display="none"
}

function minesweeper(){
	
	hide();
	document.getElementById("mineSweeper").style.display="block";
	
}

function hideMS(){
	document.getElementById("mineSweeper").style.display="none";
}

function unblock(){
	hide();
	document.getElementById("unblock").style.display="block";
}

function hideUnblock(){
	document.getElementById("unblock").style.display="none";
}

function signOut(){
	
	var confirmSignOut = confirm("Sign out of "+window.userSignedIn+"?");
	if (confirmSignOut == true){
		location.reload();
	}else{
		alert("Signout cancelled.");
	}
}

window.adminMode=false;

function admin(){
	if (window.adminMode==true){
		alert("Already in admin mode.");
		return false;
	}
	if (window.userSignedIn == "angus"){
		var adminPass = prompt("Enter Admin Password");
		if (adminPass=="dontsnitch"){
			window.adminMode = true;
			alert("Admin Mode enabled");
			adminEnabled();
		}else{
			alert("Incorrect Password.");
		}
	}else{
		alert("Sorry, "+window.userSignedIn+", you must be signed in as angus to enter admin mode.");
	}
}

function adminEnabled(){
	document.getElementById("adminModeEnabled").innerHTML="Admin mode enabled.";
	document.getElementById("adminButton").style.display="inline-block";
}

window.panel = false;

function adminPannel(){
}

function forgot(){
	document.getElementById("forgotPassword").style.display="inline-block";
}

function recover(){
	
	var inputUser = document.getElementById("forgotPassUser").value.toLowerCase();
	var inputId = document.getElementById("forgotPassId").value;
	
	var userIndex = users.indexOf(inputUser);
	var idIndex = inputId - 2;
	if (userIndex==idIndex && userIndex > -1 && idIndex > -1){
		alert("Password for your account is "+passwords[idIndex+2]);
	}else{
		alert("Incorrect Credentials. If you have lost these details, please contact website administrator (you know who that is).");
	}
	
}

function resetId(){
	var pass = prompt("Please enter your password").toLowerCase();
	if (pass==window.passwordUser){
		findId();
	}else{
		alert("Incorrect password.")
	}
}

function findId(){
	var idReset = users.indexOf(window.userSignedIn.toLowerCase())+2;
	alert("Your reset ID is "+ idReset);
}

function toggleVisible(id){
	var e = document.getElementById(id);
	if (e.style.display=="none"){
		e.style.display="inline-block";
	}else{
		e.style.display="none";
	}
}

function command(){
	window.cmd=document.getElementById("adminLine").value.toLowerCase();
	var includes = commands.includes(window.cmd);
	if (includes==true) {
		if (window.cmd=="set_user"){
			set_user();
		}
		if (window.cmd=="set_admin_mode"){
			set_admin_mode();
		}
		if (window.cmd=="help"){
			help();
		}
		if(window.cmd=="alert"){
			cmdAlert();
		}
		if(window.cmd=="list_users"){
			list_users();
		}
		if(window.cmd=="close"){
			cmdClose();
		}
	}else{
		alert("Command does not exist. Type help for list of commands.");
	}
}

function set_user(){
	var setUser=prompt("Type name of user to switch to (this will disable admin mode).");
	var n = users.includes(setUser.toLowerCase());
	if (n == true){
		alert("ADMIN MODE Disabled, user switched to: "+setUser);
		window.userSignedIn=setUser;
		toggleVisible("adminPanel");
		toggleVisible("adminButton");
		window.adminMode=false;
		document.getElementById("userDisplay").innerHTML="Signed in as "+window.userSignedIn;
		document.getElementById("adminModeEnabled").innerHTML="Admin Mode Disabled.";
	}else{
		alert("User does not exist.");
	}
}

function set_admin_mode(){
	
}

function help(){
	alert("List of commands: "+commands);
}

function cmdAlert(){
	var a = prompt("What text would you like to alert?");
	alert(a);
}

function list_users(){
	alert(users);
}

function cmdClose(){
	location.replace();
}