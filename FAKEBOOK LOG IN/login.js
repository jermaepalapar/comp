
let inputuser = document.getElementById('inputuser');
let inputpass = document.getElementById('inputpass');
let btnlogin = document.getElementById('btnlogin');

btnlogin.addEventListener("click", function(e) {
	
	  e.preventDefault()
	  
	  if (inputuser.value == "Jermae") {
		  
		  if (inputpass.value == "1234"){
			  
			  location.href = "index.html";
			  
		  } else {
			  alert ("Invalid Password");
		  }
    } else { 
	     alert ("Invalid Username");
	}
	
});