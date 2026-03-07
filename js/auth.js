async function login(){

let email=document.getElementById("email").value

let password=document.getElementById("password").value

const {data,error} = await supabaseClient.auth.signInWithPassword({

email:email,

password:password

})

if(error){

alert("Login Failed")

return

}

localStorage.setItem("session",JSON.stringify(data.session))

window.location="admin.html"

}
