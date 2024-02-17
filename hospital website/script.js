function  validate(){
    var username=document.getElementById("uname");
    var password=document.getElementById("pass");
    if(username.value=="" ||password.value==""){
        alert("no blank values allowed");
    }
}