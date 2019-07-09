function danger(){
    document.getElementById("danger1").innerHTML="";
    document.getElementById("danger2").innerHTML="";
    var name_v=document.forms["f_form"]["name"].value;
    var id_v=document.forms["f_form"]["id"].value;
    if((name_v==null || name_v==0) && (id_v==null || id_v.length!=8)){
	document.getElementById("danger1").innerHTML="Enter the Name!";	
	document.getElementById("danger2").innerHTML="Enter a valid Id!";
	return false;
	}
    if(name_v==null || name_v==0){
        document.getElementById("danger1").innerHTML="Enter the Name!";
        return false;
    }
    else if(id_v==null || id_v.length!=8){
        document.getElementById("danger2").innerHTML="Enter a valid Id!";
        return false;

    }
}
