// Write code related to Done page here
let doneList=JSON.parse(localStorage.getItem("done-list"))||[];

let doneTbody=document.querySelector("tbody");

function donePage(){

    
    doneList.forEach((element,index) => {
        let tr_done=document.createElement("tr");

    let name =document.createElement("td");
    let description =document.createElement("td");
    let start_date =document.createElement("td");
    let end_date= document.createElement("td");
    let priority = document.createElement("td");

    name.innerText=element.name;
    description.textContent=element.description;
    start_date.innerText=element.start_date;
    end_date.innerText=element.end_date;
    priority.innerText=element.priority;

    tr_done.append(name,description,start_date,end_date,priority);

    doneTbody.append(tr_done)

    
    })

}
donePage()