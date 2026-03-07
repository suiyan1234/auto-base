async function loadDashboard(){

const {data}=await supabaseClient
.from("qa_projects")
.select("*")

let totalCases=0
let passed=0
let automation=0
let openBug=0

data.forEach(p=>{

totalCases+=p.case_total
passed+=p.case_passed
automation+=p.automation_total
openBug+=p.bug_open

})

let passRate=Math.round(passed/totalCases*100)
let autoRate=Math.round(automation/totalCases*100)

document.getElementById("totalCases").innerText=totalCases
document.getElementById("passRate").innerText=passRate+"%"
document.getElementById("autoRate").innerText=autoRate+"%"
document.getElementById("openBug").innerText=openBug

}
