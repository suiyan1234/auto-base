import './supabase.js'

window.login=async function(){

const email=document.getElementById("email").value
const password=document.getElementById("password").value

const {error}=await supabase.auth.signInWithPassword({

email,
password

})

if(!error){

location.href="admin.html"

}else{

alert("login failed")

}

}
