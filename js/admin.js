import './supabase.js'

async function load(){

const {data}=await supabase
.from('qa_modules')
.select('*')

const table=document.querySelector("#adminTable tbody")

table.innerHTML=""

data.forEach(m=>{

table.innerHTML+=`

<tr>

<td>${m.module}</td>
<td>${m.owner}</td>
<td>${m.case_total}</td>

<td>

<button onclick="del(${m.id})">Delete</button>

</td>

</tr>

`

})

}

window.add=async function(){

const module=document.getElementById("module").value
const owner=document.getElementById("owner").value
const case_total=document.getElementById("case_total").value

await supabase
.from('qa_modules')
.insert([{module,owner,case_total}])

load()

}

window.del=async function(id){

await supabase
.from('qa_modules')
.delete()
.eq('id',id)

load()

}

window.logout=async function(){

await supabase.auth.signOut()

location.href="login.html"

}

load()
