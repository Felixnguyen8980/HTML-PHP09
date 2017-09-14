/*-----new-pass----
-------notification-pw
-----*/
function checkpass(){
	var pass=document.getElementById("new-pass").value;
	console.log(pass);
	var x;
	if (pass.length <8)
	{	
		document.getElementById("notification-pw").innerHTML="password's length must be over or equal 8 characters";	
		x=false;
		console.log(x);
		return x;
	}
	else{
		document.getElementById("notification-pw").innerHTML="&nbsp;";	
		x=true;
		console.log(x);
		return x;	
	}
}
