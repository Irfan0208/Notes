// Write code related to Home page here 
let form=document.querySelector("form");
let userData=JSON.parse(localStorage.getItem("task-list")) || []

form.addEventListener("submit",(e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let description = document.getElementById("desc").value;
    let start_date = document.getElementById("start").value;
    let end_date = document.getElementById("end").value;
    let priority = document.getElementById("priority").value;

    let obj = {name,description,start_date,end_date,priority};
    userData.push(obj);

    localStorage.setItem("task-list",JSON.stringify(userData));

})
