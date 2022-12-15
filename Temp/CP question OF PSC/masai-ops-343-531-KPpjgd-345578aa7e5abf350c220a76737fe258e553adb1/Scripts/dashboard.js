// Write code related to dashboard page here
let userData = JSON.parse(localStorage.getItem("task-list")) || [];
let priorityData = JSON.parse(localStorage.getItem("priority-list")) || []
let tbody = document.getElementById("tbody");
let listOfPriority= getElementById("filter")

let task_count=document.getElementById("task-count")

listOfPriority.addEventListener("change", () =>{
     let value=listOfPriority.value;
     if(value=="Low")
     {
        
     }
     else if(value=="Medium")
     {

     }
     else if(value=="High")
     {

     }
     else
     {

     }
})

function showData()
{
    tbody.innerHTML=""
    task_count.innerText=userData.length;

    userData.forEach((element,index) => 
    {
        let tr = document.createElement("tr");
        let td_name = document.createElement("td")
        let td_desc = document.createElement("td")
        let td_startDate = document.createElement("td")
        let td_endDate= document.createElement("td")
        let td_priority = document.createElement("td")
        let td_add = document.createElement("td");
        // console.log(element)

        td_name.textContent=element.name;
        td_desc.innerText=element.description;
        td_startDate.innerText=element.start_date;
        td_endDate.innerText=element.end_date;
        td_priority.innerText=element.priority;
        td_add.innerText="Add";
        td_add.addEventListener("click", () => {
            priorityData.push(element);
            localStorage.setItem("priority-list",JSON.stringify(priorityData));
            // tr.innerHTML=null;
            userData.splice(index,1);
            localStorage.setItem("task-list",JSON.stringify(userData));
            showData();
        })

        tr.append(td_name,td_desc,td_startDate,td_endDate,td_priority,td_add);
        tbody.append(tr);
        // console.log(tbody.innerText)
    });
    
}

showData();

