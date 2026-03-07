async function load(){

let {data}=await supabaseClient

.from("projects")

.select("*")

let html=""

data.forEach(p=>{

html+=`

<tr>

<td>${p.name}</td>

<td>${p.owner}</td>

<td>${p.function_total}</td>

<td>${p.case_done}/${p.case_total}</td>

<td>${p.auto_case}</td>

<td>${p.status}</td>

</tr>

`

})

document.getElementById("projectTable").innerHTML=html

}

load()
