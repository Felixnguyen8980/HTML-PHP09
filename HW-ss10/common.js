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

function validateForm(){
	var name=document.getElementById("cname").value;

	var subname=document.getElementById("sname").value;
	var mobile=document.getElementById("mobile").value;
	
	if ((mobile.length<10) || (mobile.length>12)){
		document.getElementById("mobile").style.border="1px solid red";
	}
	var f,m;
	f=document.getElementById("female").checked;
	m=document.getElementById("male").checked;
	console.log(f);
	console.log(m);
	if ((f==false)&&(m==false)){
		document.getElementById("bfemale").style.border="1px solid red";
		document.getElementById("bmale").style.border="1px solid red";
	}

	if (name.length==0){
		document.getElementById("cname").style.border="1px solid red";
	}
	if (subname.length==0){
		document.getElementById("sname").style.border="1px solid red";
	}
	var newpass=document.getElementById("new-pass").value;
	if (newpass.length<8){
		document.getElementById("new-pass").style.border="1px solid red";
	}

}