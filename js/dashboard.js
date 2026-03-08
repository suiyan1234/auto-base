import './supabase.js'

async function loadData(){

const {data,error}=await supabase
.from('qa_modules')
.select('*')

const table=document.querySelector("#moduleTable tbody")

table.innerHTML=""

data.forEach(m=>{

let row=`

<tr>

<td>${m.module}</td>
<td>${m.owner}</td>
<td>${m.case_total}</td>
<td>${m.case_pass}</td>
<td>${m.case_fail}</td>
<td>${m.automation}</td>
<td>${m.bug_open}</td>
<td>${m.sprint}</td>

</tr>
`

table.innerHTML+=row

})

drawCharts(data)

}

function drawCharts(data){

const auto=data.map(d=>d.automation)
const module=data.map(d=>d.module)

new Chart(
document.getElementById("automationChart"),
{
type:'bar',
data:{
labels:module,
datasets:[{
label:'Automation',
data:auto
}]
}
})

const bug=data.map(d=>d.bug_open)

new Chart(
document.getElementById("bugChart"),
{
type:'line',
data:{
labels:module,
datasets:[{
label:'Open Bugs',
data:bug
}]
}
})

}

loadData()
