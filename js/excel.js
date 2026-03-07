document.getElementById("excelFile").addEventListener("change",importExcel)

async function importExcel(event){

let file=event.target.files[0]

let reader=new FileReader()

reader.onload=function(e){

let data=new Uint8Array(e.target.result)

let workbook=XLSX.read(data,{type:'array'})

let sheet=workbook.Sheets[workbook.SheetNames[0]]

let rows=XLSX.utils.sheet_to_json(sheet)

rows.forEach(async row=>{

await supabaseClient
.from("qa_modules")
.insert({

module:row.module,
owner:row.owner,
case_total:row.case_total,
case_pass:row.case_pass,
automation:row.automation,
bug_open:row.bug_open,
status:"Testing"

})

})

alert("Excel 导入完成")

}

reader.readAsArrayBuffer(file)

}
