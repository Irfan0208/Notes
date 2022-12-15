    let myForm=document.getElementById("form");
    let tbody=document.querySelector("tbody");

    let arr=JSON.parse(localStorage.getItem("UserData"));
    if(arr ==null)
    {
        arr=[];
    }
    // tbody.innerHTML=null;
        arr.forEach((element,index) => { 
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        td1.innerText=element.task;
        td2.innerText=element.priority;
        td2.style.backgroundColor="green";
    
        if(td2.innerText=="High"){
        td2.style.backgroundColor="red"
        }
        
        tr.append(td1,td2);
        tbody.append(tr);
        });

    myForm.addEventListener("submit",(e) =>{
        e.preventDefault();
        let data={
            task:myForm.task.value,
            priority: myForm.priority.value
        }

    arr.push(data);
    localStorage.setItem("UserData",JSON.stringify(arr))
    
    tbody.innerHTML=null; 
    
    // localStorage();

    arr.forEach((element,index) => { 
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    td1.innerText=element.task;
    td2.innerText=element.priority;

    td2.style.backgroundColor="green";

    if(td2.innerText=="High"){
    td2.style.backgroundColor="red"
    }
    tr.append(td1,td2);
    tbody.append(tr);

    });

});
