
/*Mail 
--NumberOfAdults
--NumberOfChilds
--ComingDay
--LeavingDay
--Submit
--AlertIOChild-Adults
--innerHTML
--AlertIOComingday-Leavingday
--AlertIOMail
*/
function validateForm(){
var Na,Nc;
Na = document.getElementById('NumberOfAdults').value;
Nc= document.getElementById('NumberOfChilds').value;
if (Nc>=Na){
	alert("Alert IO : NumberOfAdults < NumberOfChilds");
        return false;
}

var Cd,Ld;
Cd=document.getElementById('ComingDay').value;
Ld=document.getElementById('LeavingDay').value;
var CdYear,LdYear;
	CdYear=Cd.slice(5,9);
	LdYear=Ld.slice(5,9);
if(Ld<Cd){
	alert("Alert IO : ComingDay < LeavingDay");
	return false;
}
else
if (Ld==Cd)
	if(Cd>Ld){
	alert("Alert IO : ComingDay < LeavingDay");
	return false;
}
}
function checkMail(){
	var mail;
	mail=document.getElementById('Mail').value;
	var atpos=mail.indexOf("@");
	var dotpos = mail.lastIndexOf(".");

	if( mail.indexOf("@") <0){}
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.length) {
       document.getElementById('AlertIOMail').innerHTML=
	"Not a valid e-mail address"
	return false;
}
}

