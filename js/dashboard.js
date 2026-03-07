async function load(){

const {data}=await supabaseClient
.from("qa_modules")
.select("*")

let html=""

let total=0
let pass=0
let auto=0
let bug=0

data.forEach(m=>{

total+=m.case_total
pass+=m.case_pass
auto+=m.automation
bug+=m.bug_open

html+=`

<tr>

<td>${m.module}</td>
<td>${m.owner}</td>
<td>${m.case_total}</td>
<td>${m.case_pass}</td>
<td>${m.case_fail}</td>
<td>${m.automation}</td>
<td>${m.bug_open}</td>
<td>${m.status}</td>

</tr>

`

})

document.getElementById("tableBody").innerHTML=html

document.getElementById("caseTotal").innerText=total

let passRate=Math.round(pass/total*100)

document.getElementById("passRate").innerText=passRate+"%"

let autoRate=Math.round(auto/total*100)

document.getElementById("autoRate").innerText=autoRate+"%"

document.getElementById("openBug").innerText=bug

}

load()
