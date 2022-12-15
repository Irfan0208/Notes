// Write code for the Progress page here 
let priorityData= JSON.parse(localStorage.getItem("priority-list"))||[];
let doneList = JSON.parse(localStorage.getItem("done-list"))||[];
let progressTBody=document.querySelector("tbody");

function progressPage(){

    progressTBody.innerHTML=null;
    priorityData.forEach((element,index) => {
        let pTr =document.createElement("tr");
        let name=document.createElement("td");
        let description = document.createElement("td");
        let start_date= document.createElement("td");
        let end_date=document.createElement("td");
        let priority=document.createElement("td");
        let done=document.createElement("td");

        name.innerText=element.name;
        description.innerText.description;
        start_date.innerText=element.start_date;
        end_date.innerText=element.end_date;
        priority.innerText=element.priority;
        done.innerText="Add";
        done.addEventListener("click", () => {
            doneList.push(element);
            localStorage.setItem("done-list",JSON.stringify(doneList));
            priorityData.splice(index,1);
            localStorage.setItem("priority-list",JSON.stringify(priorityData));
            progressPage()
        })


        pTr.append(name,description,start_date,end_date,priority,done)
        progressTBody.append(pTr)

    })


}

progressPage()