const session=localStorage.getItem("session")

if(!session){

window.location="login.html"

}

async function loadAdmin(){

let {data}=await supabaseClient

.from("projects")

.select("*")

let html=""

data.forEach(p=>{

html+=`

<tr>

<td>${p.name}</td>

<td>${p.owner}</td>

<td><input value="${p.function_total}" id="f_${p.id}"></td>

<td><input value="${p.case_total}" id="c_${p.id}"></td>

<td><input value="${p.case_done}" id="d_${p.id}"></td>

<td><input value="${p.auto_case}" id="a_${p.id}"></td>

<td>

<button onclick="save('${p.id}')">Save</button>

</td>

</tr>

`

})

document.getElementById("adminTable").innerHTML=html

}

async function save(id){

await supabaseClient

.from("projects")

.update({

function_total:document.getElementById("f_"+id).value,

case_total:document.getElementById("c_"+id).value,

case_done:document.getElementById("d_"+id).value,

auto_case:document.getElementById("a_"+id).value

})

.eq("id",id)

alert("Saved")

}

loadAdmin()
