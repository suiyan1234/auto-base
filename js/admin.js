async function load(){

const {data}=await supabaseClient
.from("qa_modules")
.select("*")

let html=""

data.forEach(m=>{

html+=`

<tr>

<td><input id="module_${m.id}" value="${m.module}"></td>

<td><input id="owner_${m.id}" value="${m.owner}"></td>

<td><input id="total_${m.id}" value="${m.case_total}"></td>

<td><input id="pass_${m.id}" value="${m.case_pass}"></td>

<td><input id="fail_${m.id}" value="${m.case_fail}"></td>

<td><input id="auto_${m.id}" value="${m.automation}"></td>

<td><input id="bug_${m.id}" value="${m.bug_open}"></td>

<td>

<button onclick="save(${m.id})">Save</button>

<button onclick="remove(${m.id})">Delete</button>

</td>

</tr>

`

})

document.getElementById("adminBody").innerHTML=html

}

load()
