function print(){
    var user=document.getElementById('username1').value;
   if(user){
    localStorage.setItem('user',user);
    window.location.href="message.html";
   }
}